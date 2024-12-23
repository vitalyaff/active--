const inp1 = document.querySelector('#in1')
const inp2 = document.querySelector('#in2')
const inp3 = document.querySelector('#in3')
const inp4 = document.querySelector('#in4')
// ---------------------------------------
const one = document.querySelector('#fg1')
const two = document.querySelector('#fg2')
const three = document.querySelector('#fg3')
// ---------------------------------------

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// Первый инпут

inp1.addEventListener('mouseover', myFn1)
inp1.addEventListener('mouseout', myFn5)
inp1.addEventListener('click', Fn1)
function myFn1() {
    one.classList.add('fg')
}
function myFn5() {
    one.classList.remove('fg')
}
function Fn1() {
    one.classList.remove('fg')
}

// Второй инпут

inp2.addEventListener('mouseover', myFn2)
inp2.addEventListener('mouseout', myFn6)
inp2.addEventListener('click', Fn2)
function myFn2() {
    two.classList.add('fg')
}
function myFn6() {
    two.classList.remove('fg')
}
function Fn2() {
    two.classList.remove('fg')
}

// Третий инпут

inp3.addEventListener('mouseover', myFn3)
inp3.addEventListener('mouseout', myFn7)
inp3.addEventListener('click', Fn3)
function myFn3() {
    three.classList.add('fg')
}
function myFn7() {
    three.classList.remove('fg')
}
function Fn3() {
    three.classList.remove('fg')
}

// Четвертый инпут

inp4.addEventListener('mouseover', myFn4)
inp4.addEventListener('mouseout', myFn8)
inp4.addEventListener('click', Fn4)
function myFn4() {
    three.classList.add('fg')
}
function myFn8() {
    three.classList.remove('fg')
}
function Fn4() {
    three.classList.remove('fg')
}

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$


// Первый инпут

inp1.addEventListener('mouseover', myFna)
inp1.addEventListener('mouseout', myFna1)
inp1.addEventListener('click', Fna2)
function myFna() {
    fg11.classList.add('fg')
}
function myFna1() {
    fg11.classList.remove('fg')
}
function Fna2() {
    fg11.classList.remove('fg')
}

// Второй инпут

inp2.addEventListener('mouseover', myFnb)
inp2.addEventListener('mouseout', myFnb1)
inp2.addEventListener('click', Fnb2)
function myFnb() {
    fg22.classList.add('fg')
}
function myFnb1() {
    fg22.classList.remove('fg')
}
function Fnb2() {
    fg22.classList.remove('fg')
}

// Третий инпут

inp3.addEventListener('mouseover', myFnc)
inp3.addEventListener('mouseout', myFnc1)
inp3.addEventListener('click', Fnc2)
function myFnc() {
    fg33.classList.add('fg')
}
function myFnc1() {
    fg33.classList.remove('fg')
}
function Fnc2() {
    fg33.classList.remove('fg')
}

// Четвертый инпут

inp4.addEventListener('mouseover', myFnd)
inp4.addEventListener('mouseout', myFnd1)
inp4.addEventListener('click', Fnd4)
function myFnd() {
    fg33.classList.add('fg')
}
function myFnd1() {
    fg33.classList.remove('fg')
}
function Fnd4() {
    fg33.classList.remove('fg')
}


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const icon2 = document.querySelector('#icon2')
const icon = document.querySelector('#icon')
const input = document.querySelectorAll('input')
const main = document.querySelector('#m')
const p = document.querySelectorAll('p')
const fg11 = document.querySelector('#fg1-1')
const fg22 = document.querySelector('#fg2-2')
const fg33 = document.querySelector('#fg3-3')
const tg = document.querySelector('#tg')

fg11.classList.add('s0')
fg22.classList.add('s0')
fg33.classList.add('s0')

icon.classList.add('s0')
tg.classList.add('btn2')

icon.addEventListener('click', iconFn2)
function iconFn2() {
    tg.classList.remove('btn1')
    tg.classList.add('btn2')
    icon.classList.add('ga2')
    icon.classList.remove('ga1')
    fg11.classList.remove('s1')
    fg22.classList.remove('s1')
    fg33.classList.remove('s1')

    fg11.classList.add('s0')
    fg22.classList.add('s0')
    fg33.classList.add('s0')

    one.classList.remove('s0')
    two.classList.remove('s0')
    three.classList.remove('s0')

    icon.classList.add('s0')
    icon.classList.remove('s1')
    icon2.classList.remove('s0')
    icon2.classList.add('s1')

    main.classList.remove('icon-main')

    input.forEach(el => {
        el.classList.remove('icon-input')
    })

    p.forEach(el1 => el1.classList.remove('icon-p'))

}


icon2.addEventListener('click', iconFn)
function iconFn() {
    tg.classList.remove('btn2')
    tg.classList.add('btn1')
    icon2.classList.add('ga1')
    icon.classList.remove('ga2')
    fg11.classList.remove('s0')
    fg22.classList.remove('s0')
    fg33.classList.remove('s0')
    fg11.classList.add('s1')
    fg22.classList.add('s1')
    fg33.classList.add('s1')

    one.classList.add('s0')
    two.classList.add('s0')
    three.classList.add('s0')

    icon.classList.remove('s0')
    icon.classList.add('s1')
    icon2.classList.remove('s1')
    icon2.classList.add('s0')

    main.classList.add('icon-main')

    input.forEach(el => {
        el.classList.add('icon-input')
    })

    p.forEach(el1 => el1.classList.add('icon-p'))

}



// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
