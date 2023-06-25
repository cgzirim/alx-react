import { getFullYear, getFooterCopy, getLatestNotification } from './utils';


test('funtion returns the current year', () => {
    const year = getFullYear();
    expect(year).toEqual(new Date().getFullYear());
})

test('returns expected string when arg == true', () => {
    const output = getFooterCopy(true)
    expect(output).toEqual('Holberton School')
})

test('returns expected string when arg == false', () => {
    const output = getFooterCopy(false)
    expect(output).toEqual('Holberton School main dashboard')
})

test('returns dict with expected val for key __html', () => {
    const dict = getLatestNotification()
    expect(dict.__html).toEqual('<strong>Urgent requirement</strong> - complete by EOD')
})