import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';
import { IUser } from './user.model';
import { UiService } from '../ui';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    currentUserChanged = new BehaviorSubject<IUser>(null);

    private currentUser: IUser;

    constructor(private router: Router,
                private location: Location,
                private ui: UiService) {
    }

    login(value: { email: string, password: string }) {
        const { email, password } = value;
        this.currentUser = { email };
        this.currentUserChanged.next(this.currentUser);
        this.router.navigate([ 'home' ]);
        this.ui.showToast('Logged in successfully');
    }

    logout(b: boolean = true) {
        if (b) {
            this.currentUser = null;
            this.currentUserChanged.next(this.currentUser);
            this.router.navigate([ 'login' ]);
            this.ui.showToast('Logged out successfully');
        } else {
            this.ui.showToast('Cancelled logout');
            this.location.back();
        }
    }

    getCurrentUser() {
        return this.currentUser ? { ...this.currentUser } : null;
    }
}
