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
    new Gitalk({
        clientID: 'Ov23liVMXJybGQUAvoSV',
        clientSecret: '72bc7c14ae51864eb9eb50d5b9d1ef22f1d6d350',
        repo: 'https://github.com/4dspacetime/gitalk',
        owner: '4dspacetime',
        admin: ['4dspacetime']
    }).render('gitalk-container')
}