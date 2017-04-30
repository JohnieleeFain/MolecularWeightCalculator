//function percentage() {
//    currentInput = (currentInput / 100)
//    displayCurrentInput();
//}
//
// Test for changing the current input to a percentage
//QUnit.test("Percentage test", function (assert) {
//    allClear();
//    addDigit('50');
//    percentage();
//    assert.equal(document.getElementById("screen").value, "0.5", "Passed - Expected 0.5");
//});

// Test for getting an the attributes of an element
QUnit.test("Get Element test", function (assert) {
    elements('H');
    getElement();
    assert.equal(document.getElementById("screen").value, "H", "Passed - Expected H");
});

//Test for getting the attributes of a compound
