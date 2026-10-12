
//learn intl is use for example here so i egt1.000.000 instan of a whole number
//easier to read ingame.
const numberFormatter = new Intl.NumberFormat("en-Us");

export function formatCookies(value: number): string {
    return numberFormatter.format(value);
}