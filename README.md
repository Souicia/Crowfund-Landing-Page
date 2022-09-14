# Crowfund-Landing-Page
Handmade Crowndfund page for monitors stands.

Default features: Incrementing money and total numbers of backers for each payments. Select different types of pledges with requirements. Bookmark. Decrement amount of pledges for each payment.

Added features: Localstorage for all interactive elements (money, backers, bookmark, pledges). Once a pledge runs out, button appears to reset local storage and refresh page. 

Code I am proud of: Successful local storage implementation. 

Code I am not so proud of: Not very DRY functions, in fact, quiet wet.

Bugs...: Decrement on pledges sometimes doesn't work. Need to double click on section 3 buttons for the pledge pop-up menu to open. Why? Absolutely no clue whatsoever...

Features failed to implement: When pledging enough to reach a better pledge reward, popup appears to redirect the user to a better pledge.
Reason for failure: Couldn't even get the full conditional statement to work after page refresh. Conflict of value between default variable's value and local storage's value.
