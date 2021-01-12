
export const required = value => {
    if (value) return undefined;
    return 'Please enter at least 1 character'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Maximum length of ${maxLength} characters is exceeded`;
    return undefined;
}