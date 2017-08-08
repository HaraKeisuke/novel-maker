export default class NumberUtils {
    static roundRange(val: number, min: number, max: number) {
        if (val > max) {
            val = max;
        } else if (val < min) {
            val = min;
        }
        return val;
    }
}
