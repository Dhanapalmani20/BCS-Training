-**- promise.all,promise.any,promise.race,promise.allSettled-**

- promise.all-->means all promises comes in a single array or single object.
- it will comes in the order what we have given in the array like[p1,p2,p3]
- promise.race-->the first resolved one will be printed and the others will get rejected.
- promise.any--->it checks any one will resolves first and then it will be printed and others get rejected.
- promise.allSettled--->it always return array of objects.if one gets rejected it doesnt get error it saves like **_reason:rejected_** inside the array of objects.
