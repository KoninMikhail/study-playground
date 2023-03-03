function sum(a, b) {
    return a + b;
}

// test
// title: string
// callback: function
// returns boolean
function test(title, callback) {
    try {
        callback();
        console.log(`${title}: success`);
    } catch (err) {
        console.error(`${title}: ${err.message}`);
    }
}

// expect
// testedValue: string
// returns success | error
function expect(testedValue) {
    return {
        toBe(expected) {
            if (testedValue !== expected) {
                throw new Error(`${testedValue} is not equal: ${expected}`);
            }
        },
        toHaveLeght(expected) {
            if (testedValue.toString().length !== expected) {
                throw new Error(
                    `lenght ${
                        testedValue.toString().length
                    } is not equal to expected: ${expected}`
                );
            }
        }
    };
}


// Terminal
// success: some ads numbers
// success: sum has valid length
// error: some ads numbers
// error: sum has valid length

test("some ads numbers", () => {
    const result = sum(5, 10);
    expect(result).toBe(15);
});

test("sum has valid lenght", () => {
    const result = sum(22, 33);
    expect(result).toHaveLeght(2);
});

test("some ads numbers", () => {
    const result = sum(5, 10);
    expect(result).toBe(16);
});

test("sum has valid lenght", () => {
    const result = sum(22, 133);
    expect(result).toHaveLeght(2);
});
