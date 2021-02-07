export class Utils {
    static isMobile() {
        return window && window.matchMedia("(max-width: 767px)").matches;
    }
}