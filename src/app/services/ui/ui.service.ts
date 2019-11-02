import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class UiService {

    constructor(private toastController: ToastController) {
    }

    showToast(message: string, duration: number = 2000) {
        this.toastController.create({
            message,
            duration,
            animated: true,
            showCloseButton: true,
            closeButtonText: 'OK',
            color: 'success',
            cssClass: 'toast-message',
            position: 'top'
        }).then(toast => toast.present());
    }
}
