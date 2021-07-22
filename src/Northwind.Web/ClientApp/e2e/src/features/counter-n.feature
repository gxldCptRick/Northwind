Feature: Increment the counter by two
    This feature lets a user increment (by two) the counter by clicking on the button.

Scenario: Basic first increment is always by 1
    Given I am on the counter-n page
    When I click on the increment button 5 times
    Then The counter should show "5"

Scenario: N is changed then increment
    Given I am on the counter-n page
    When I set N to be 2 and click on increment button 2 times
    Then The counter should show "4"

