import { Component, OnInit } from '@angular/core';
import {
  LogService,
  AuthService,
  DialogService
} from '~/modules/core/services';
import { PlayerService } from '~/modules/player/services';
import { ITrack } from '~/modules/core/models/track.model';

@Component({
  moduleId: module.id,
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class TracklistComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private dialogService: DialogService,
    private logService: LogService,
    public playerService: PlayerService
  ) {}

  ngOnInit(): void {}

  public record(track: ITrack, usernameAttempt?: string) {
    if (AuthService.CURRENT_USER) {
      this.dialogService
        .confirm('Are you sure you want to re-record this track?')
        .then(ok => {
          if (ok) this._navToRecord(track);
        });
    } else {
      this.authService
        .promptLogin(
          'Provide an email and password to record.',
          usernameAttempt
        )
        .then(this._navToRecord.bind(this, track), usernameAttempt => {
          // initiate sequence again
          this.record(track, usernameAttempt);
        });
    }
  }

  private _navToRecord(track: ITrack) {
    // TODO: navigate to record screen
    this.logService.debug('yes, re-record', track);
  }
}
