const calculator = {
    firstNumber: '0',
    lastNumber: '0',
    limit: 14,
    operator: false,
    screen: document.querySelector('#screen'),
    buttons: {
        numbers: document.querySelectorAll('.btn-num'),
        functions: document.querySelectorAll('.btn-func'),
        operators: document.querySelectorAll('.btn-opr'),
    },
    output: function (value) {
        this.screen.textContent = value
    },

    input: function (value) {
        //check for zero value
        if (this.screen.innerHTML == 0) {
            if (value != '.') {
                this.output('')
            }
        }

        //check for decimal
        if (this.getScreenData().includes('.') && value == '.') {
            return
        }


        //check if screen limit is exceeded
        if (this.getScreenData().length >= this.limit) {
            return
        }

        //output to screen
        this.output(this.screen.textContent + value)
    },
    performAction: function (data) {
        //backspace
        if (data == 'BKS') {
            this.delete()
            return
        }

        //Clear
        if (data == 'C') {
            this.reset()
        }
    },
    delete: function () {
        let screenData = this.getScreenData()
        let newData = screenData.substring(0, screenData.length - 1)

        if (newData.length == 0) {
            this.output(0)
        } else {
            this.output(newData)
        }
    },
    reset: function () {
        this.output(0)
    },
    calculate: function () {
        if (this.operator == '+') {
            return this.firstNumber + this.lastNumber
        }

        if (this.operator == '-') {
            return this.firstNumber - this.lastNumber
        }

        if (this.operator == 'x') {
            return this.firstNumber * this.lastNumber
        }

        if (this.operator == '/') {
            return this.firstNumber / this.lastNumber
        }
        return 0
    },
    getScreenData: function () {
        return this.screen.innerHTML
    }
}


calculator.buttons.numbers.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let data = this.innerHTML
        calculator.input(data)
    })
})

calculator.buttons.functions.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let data = this.innerHTML
        calculator.performAction(data)
    })
})