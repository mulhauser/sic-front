import { Component, OnInit } from "@angular/core";
import { Profile } from "../interfaces/profile";
import { ProfileService } from "../services/profile.service";

@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.scss"]
})
export class ProfilComponent implements OnInit {
  private _profile: Profile;

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
