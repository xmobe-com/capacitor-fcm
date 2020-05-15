import { Plugins } from '@capacitor/core';
const { FCMPlugin } = Plugins;
export class FCM {
    /**
     * Subscribe to fcm topic
     * @param options
     */
    subscribeTo(options) {
        return FCMPlugin.subscribeTo({ topic: options.topic });
    }
    /**
     * Unsubscribe from fcm topic
     * @param options
     */
    unsubscribeFrom(options) {
        return FCMPlugin.unsubscribeFrom({ topic: options.topic });
    }
    /**
     * Get fcm token to eventually use from a serve
     *
     * Recommended to use this instead of
     * @usage
     * ```typescript
     * PushNotifications.addListener("registration", (token) => {
     *   console.log(token.data);
     * });
     * ```
     * because the native capacitor method, for apple, returns the APN's token
     */
    getToken() {
        return FCMPlugin.getToken();
    }
    /**
     * Remove local fcm instance completely
     */
    deleteInstance() {
        return FCMPlugin.deleteInstance();
    }
}
//# sourceMappingURL=plugin.js.map