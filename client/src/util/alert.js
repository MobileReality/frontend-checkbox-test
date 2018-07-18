/**
 * Created by Bartlomiej Rutkowski on 17.03.17.
 */
import Alert from 'react-s-alert';

export function successAlert(text) {
    Alert.success(text, {
        position: 'bottom-right',
        effect: 'slide'
    });
}

export function errorAlert(text) {
    Alert.error(text, {
        position: 'bottom-right',
        effect: 'slide'
    });
}


export function informationAlert(text) {
    Alert.info(text, {
        position: 'top-left',
        effect: 'slide',
    });
}

export function closeAllAlerts() {
    Alert.closeAll();
}

