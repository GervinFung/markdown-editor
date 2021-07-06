import {combineWords, withoutLeadingTrailingWhitespace} from './markdownUtil';
const ANY_STRIKE_THROUGH: RegExp = /(?:~){2}([\s\S]+?)(?:~){2}/g;

export const checkAndConvertTextToStrikeThrough = (unprocessedInput: string): string => {
    if (unprocessedInput.includes('~~')) {
        return convertStrikeThrough(unprocessedInput);
    }
    return unprocessedInput;
}

export const convertStrikeThrough = (unprocessedInput: string): string => {
    return unprocessedInput.replace(ANY_STRIKE_THROUGH, (string, txt): string => {
        return withoutLeadingTrailingWhitespace(txt) ? combineWords('<del>', txt, '</del>') : string;
    });
};