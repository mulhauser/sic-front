import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../services/profile.service";
import { Profile } from "../interfaces/profile";

@Component({
  selector: "app-carnet",
  templateUrl: "./carnet.component.html",
  styleUrls: ["./carnet.component.scss"]
})
export class CarnetComponent implements OnInit {
  private _profile: Profile;

  private test: string;
  constructor(private _profileService: ProfileService) {}

  ngOnInit() {
    this._profileService
      .getProfile()
      .subscribe((profile: Profile) => (this._profile = profile));
  }

  get profile(): Profile {
    return this._profile;
  }
}
