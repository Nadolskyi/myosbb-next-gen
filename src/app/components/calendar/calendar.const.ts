import { CalendarComponent } from './calendar.component';

export class CalendarConstants {
    public static get dayNames() { return ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Субота']; }
    public static get dayNamesShort() { return ['Нед', 'Пон', 'Вівт', 'Сер', 'Чет', 'Пят', 'Суб']; }
    public static get dayNamesMin() { return ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']; }
    public static get monthNames() { return ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']; }
    public static get monthNamesShort() { return [ 'Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Вер', 'Жовт', 'Лист', 'Груд' ]; }
}
