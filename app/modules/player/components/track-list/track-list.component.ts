import { Component, OnInit } from '@angular/core';
import { LogService } from '~/modules/core/services';
import { PlayerService } from '~/modules/player/services';
import { ITrack } from '~/modules/core/models/track.model';

@Component({
  moduleId: module.id,
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class TracklistComponent implements OnInit {
  constructor(
    private logService: LogService,
    public playerService: PlayerService
  ) {}

  ngOnInit(): void {}

  public record(track: ITrack) {
    this.logService.inspect(track);
  }
}
