function getComponent() {
    return import('lodash').then(({default: _})=>{
        const ele = document.createElement('div')

        ele.innerHTML = _.join(['666666', 'tt66655t', '2399923'], '--')

        return ele
    })
}

getComponent().then((ele)=>{
    document.body.appendChild(ele)
})