import { MediaMatcher } from "@angular/cdk/layout";
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild
} from "@angular/core";
import * as firebase from "firebase";
import { environment } from "../environments/environment";
import { NotificationsService } from "./services/notifications.service";
import { MatSidenav } from "@angular/material/sidenav";

interface Page {
  route: string;
  name: string;
  icon: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  userToken: string;
  fillerNav: Page[] = [
    { route: "/", name: "Home", icon: "home" },
    { route: "/carnet", name: "Fiche médicale", icon: "assignment_ind" },
    { route: "/vaccin", name: "Vaccin", icon: "healing" },
    { route: "/dons", name: "Dons", icon: "opacity" }
  ];

  private _mobileQueryListener: () => void;
  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private notificationsService: NotificationsService
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  async ngOnInit() {
    firebase.initializeApp(environment.firebase);
    await this.init();
    await this.requestPermission();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  init(): Promise<void> {
    console.log(navigator.serviceWorker.ready);
    return new Promise<void>((resolve, reject) => {
      navigator.serviceWorker.ready.then(
        registration => {
          // Don't crash an error if messaging not supported
          if (!firebase.messaging.isSupported()) {
            resolve();
            return;
          }

          const messaging = firebase.messaging();

          // Register the Service Worker
          messaging.useServiceWorker(registration);

          // Initialize your VAPI key
          messaging.usePublicVapidKey(environment.firebase.vapidKey);

          // Optional and not covered in the article
          // Listen to messages when your app is in the foreground
          messaging.onMessage(payload => {
            console.log(payload);
          });
          // Optional and not covered in the article
          // Handle token refresh
          messaging.onTokenRefresh(() => {
            messaging
              .getToken()
              .then((refreshedToken: string) => {
                console.log(refreshedToken);
                this.userToken = refreshedToken;
              })
              .catch(err => {
                console.error(err);
              });
          });

          resolve();
        },
        err => {
          reject(err);
        }
      );
    });
  }

  requestPermission(): Promise<void> {
    return new Promise<void>(async resolve => {
      if (!Notification) {
        resolve();
        return;
      }
      if (!firebase.messaging.isSupported()) {
        resolve();
        return;
      }
      try {
        const messaging = firebase.messaging();
        await messaging.requestPermission();

        const token: string = await messaging.getToken();

        console.log("User notifications token:", token);
        this.userToken = token;
      } catch (err) {
        // No notifications granted
      }

      resolve();
    });
  }
}
