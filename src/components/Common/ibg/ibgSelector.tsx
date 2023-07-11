export const ibgImg = (ibg: Array<HTMLElement>) => {
    ibg.forEach((i) => {
        if (i.querySelector('img')) {
            i.style.backgroundImage = `url(${i.querySelector('img')?.getAttribute('src')})`
        }
    });
}