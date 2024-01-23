import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { take } from 'rxjs/operators';
import { PushNotifications } from '@capacitor/push-notifications';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private intervalId: any;
  private token: string | null | undefined = null;

  constructor(private angularFireMessaging: AngularFireMessaging) {}

  async initPushNotifications() {
    try {
      const token = await this.getTokenFromFirebase();
      console.log('Token FCM:', token);
    } catch (error) {
      console.error('Erreur lors de l\'obtention du token FCM:', error);
    }

    await PushNotifications.requestPermissions();
    await PushNotifications.register();

    PushNotifications.addListener('registration', (token) => {
      console.log('Push notification registration token (Capacitor):', token.value);
    });

    PushNotifications.addListener(
      'registrationError',
      (error: any) => {
        console.error('Erreur d\'enregistrement de la notification push (Capacitor):', error.error);
      }
    );

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: any) => {
        console.log('Notification push reçue (Capacitor):', notification);
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: any) => {
        console.log('Action de notification push effectuée (Capacitor)', notification.actionId, notification.inputValue);
      }
    );

    this.intervalId = setInterval(() => {
      this.sendPeriodicNotification();
    }, 20000);
  }

  async getTokenFromFirebase(): Promise<string | null | undefined> {
    try {
      const token = await this.angularFireMessaging.requestToken.pipe(take(1)).toPromise();
      this.token = token;
      return token;
    } catch (error) {
      console.error('Erreur lors de l\'obtention du token FCM depuis Firebase:', error);
      return null;
    }
  }

  async sendPeriodicNotification() {
    try {
      if (!this.token) {
        this.token = await this.getTokenFromFirebase();
        if (!this.token) {
          console.error('Impossible d\'envoyer la notification car le token FCM est introuvable.');
          return;
        }
      }

      const response = await fetch('https://fcm.googleapis.com/fcm/send', {
        method: 'POST',
        headers: {
          Authorization: 'dd3c66af7086a0a8fc51675d6c795b03b6f75333',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: this.token,
          notification: {
            title: 'Hello',
            body: 'World',
          },
        }),
      });
      console.log('Réponse de l\'envoi de la notification:', response);
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la notification:', error);
    }
  }
}
