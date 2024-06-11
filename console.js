(function() {
    'use strict';

    // Function to expand all rows
    function expandAllRows() {
        // Select all expand buttons
        const expandButtons = document.querySelectorAll('.ri-arrow-down-s-line.font-size-20');

        // Simulate click on each expand button
        expandButtons.forEach(button => {
            button.click();
			button.click();
        });
    }

    // Function to update Grade x Credits value into Grade
    function calculateAndUpdateCellValues() {
        var rows = document.querySelectorAll("tbody[role='rowgroup'] tr.b-table-details");

        rows.forEach(function(row) {
            var cell6 = row.querySelector("td.align-middle:nth-child(6)");
            var cell8 = row.querySelector("td.align-middle:nth-child(8)");

            if (cell6 && cell8) {
                var cell6Text = cell6.textContent;
                var cell8Text = cell8.textContent;

                if (!isNaN(cell6Text) && !isNaN(cell8Text) && cell6Text !== "0") {
                    var result = parseFloat(cell8Text) / parseFloat(cell6Text);
                    cell8.textContent = result;
                }
            }
        });
    }
	
	// Function to rename the cells
    function replaceText(node) {
        if (node.nodeType === Node.TEXT_NODE) {
		// Replace "GRADE X CREDIT" with "GRADE"
            	node.nodeValue = node.nodeValue.replace(/GRADE X CREDIT/g, "GRADE");
		node.nodeValue = node.nodeValue.replace(/NOT X KREDİ/g, "NOT");
        } else if (node.nodeType === Node.ELEMENT_NODE) {
		node.childNodes.forEach(replaceText);
        }
    }
	
    // Call the function to expand all rows
    expandAllRows();

    // Wait for 1 second before updating cell values
    setTimeout(function() {
        calculateAndUpdateCellValues();
		replaceText(document.body);
    }, 1000); // 1000 milliseconds = 1 second
})();
