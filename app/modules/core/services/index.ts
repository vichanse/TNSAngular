import { DatabaseService } from './database.service';
import { LogService } from './log.service';
import { AuthService } from './auth.service';
import { DialogService } from '~/modules/core/services/dialog.service';

export const PROVIDERS: any[] = [
  AuthService,
  DatabaseService,
  DialogService,
  LogService
];

export * from './auth.service';
export * from './database.service';
export * from './dialog.service';
export * from './log.service';
