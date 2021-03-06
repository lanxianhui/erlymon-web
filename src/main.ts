/**
    Erlymon is an open source GPS tracking system for various GPS tracking devices.

    Copyright (C) 2015, Sergey Penkovsky <sergey.penkovsky@gmail.com>.

    This file is part of Erlymon.

    Erlymon is free software: you can redistribute it and/or  modify
    it under the terms of the GNU Affero General Public License, version 3,
    as published by the Free Software Foundation.

    Erlymon is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
