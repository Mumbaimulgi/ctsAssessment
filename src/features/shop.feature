Feature: This feature will make sure that the shop page is navigable and usable.

  Scenario Outline: As a user, I can log into the secure area.
    Given I am on the home page in <Env> Environment
    When I navigate to 'Deals'
    Then the user should be on the "<dealsUrl>" page

    Examples:
      | Env  | dealsUrl                  |
      | Live | https://www.sky.com/deals |


#  Scenario Outline: User sees tiles on the shop page
#    Given I am on the home page in <Env> Environment
#    When I try to sign in with invalid credentials
#
#    Examples:
#      | Env  |
#      | Live |



  Scenario: User sees a list of deals on the deals page
    Given I am on the home page in Live Environment
    Then I see a list of deals with a "price" to it:
      | deals: price                               |
      | Sky Q, Sky TV & Netflix - £26             |
      | Sky Q, Sky TV, Netflix & Sky Sports - £46 |
      | Sky Q, Sky TV, Netflix & Cinema - £38     |


