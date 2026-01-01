function copy(element)
{
    element.alt = 'copied', element.src = '/tpl/copied.svg'
    setTimeout(() =>
    {
        element.alt = 'copy', element.src = '/tpl/copy.svg'
    }, 2000)
}
onload = () =>
{
    hljs.highlightAll()
    new ClipboardJS('.copy')
}
