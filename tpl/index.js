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
    new GGBApplet({ 'appName': 'graphing', 'height': 600, 'showAlgebraInput': true, 'showMenuBar': true, 'showToolBar': true, 'width': 800 }, true).inject('ggb-element')
}
