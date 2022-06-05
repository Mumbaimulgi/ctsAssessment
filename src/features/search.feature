Feature: This feature will make the search show the results that are determined by editorial, as well as generic searches

  Scenario Outline: Search with text
    Given I am on the home page in <Env> Environment
    When I search ‘<searchTxt>’ in the search bar
    Then I should see an editorial section

    Examples:
      | Env  | searchTxt |
      | Live | sky       |
