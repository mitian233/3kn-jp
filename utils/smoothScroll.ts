const smoothScroll = (id: string) => {
    console.debug(`Scrolling to element with id ${id}`)
    const element = document.getElementById(id)
    if (element) {
        window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop
        })
    } else {
        console.error(`Element with id ${id} not found`)
    }
}

export default smoothScroll
