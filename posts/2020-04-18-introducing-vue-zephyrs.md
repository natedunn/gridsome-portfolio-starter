---
title: "Building a Vue UI library"
slug: introducing-vue-zephyrs
date: 2020-04-18
summary: Yet another UI library?
tags: ["components", "UI", "design", "personal"]
cover: "./images/alpine-spruce.jpg"
---

Ok. Before you click away, here me out: I know that there are a lot of UI libraries.

One could argue too many. But another argument is that each UI library really doesn't serve a huge purpose outside of the context in which it was created. Just because a company open-sources what they have been working on internally, doesn't mean that product has a whole lot of use externally. It may create inspiration, yes, but ultimately these things end up failing the average user because it wasn't designed for *their* context. This inspired me to create [Vue Zephyrs](https://vue-zephyrs.netlify.app/).

Now, I am not going to pretend that Vue Zephyrs is the final Vue UI library you will ever use. It is opinionated in some ways, no doubt. But what I think sets it apart is its ability to be accessible, themeable, but yet still usable out-of-the-box.

## Goals

### Themeablity
I set out to make what would eventually become Vue Zephyrs after I tried countless UI libraries, but couldn't find one that fit my needs or had enough ability to adapt. I enjoy using utility-based frameworks like Tailwind so my efforts went into creating something that would work well for class-based CSS frameworks. I settled on have a singular `theme.js` file that would hold designate which components would get which classes. I quickly realized that other Tailwind users could fork project and just make changes to their liking as well. But why stop there? What if you wanted to use Bootstrap, or Bulma instead? Instead of merely observing this functionality, I decided to lean into it further. And I am very excited for where this could go. More on it later.

### Accessibility
Before I even wrote the first line of code, I wanted to make sure that every component had accessibility in mind. It is always frustrating to finishing writing some HTML or some component from scratch only to ask the question, "What did I miss?". Nothing can really take away the hard work and attention to detail that is "a11y", however if these components can help in any way, it is to the advantage of all.

I have a lot of ideas in this area, but things are still early so I will hold off until they are ready. I am very excited for this space.

### A Good Default Theme
No matter what features are shipped with Vue Zephyrs, I still want to ship a beautiful, out-of-the-box theme that anyone could feel comfortable using right away. Imagine the best designed default browser stylesheet that you can. That is what I am aiming for.

## Progress

Cool ambitions, but where am I the process of everything? Early. I am fairly close to nailing down some of the basic APIs of Vue Zephyrs. This has been the bulk of the effort, and its been slow but worthy. Everything needs to be tested and feel right. I am designing things to hopefully strike a balance between simple and flexible.

I have some basic components set up like a button, text input, select, panel, and a few more. But once I get the API in a good place across different, diverse components, then I believe I will be able to move much faster on development.

## Follow for updates

Once I find the time, I would love to set up a dev log to track the specifics about what it takes to build something like this. Though honestly it would be just as much for me as it would be for anyone else. I will update this post if make that happen. You can also follow me on [Twitter](http://twitter.com/natedunn) as well 🤗. Thank you for reading and next time I hope I have a lot more to update.

[Check out Vue Zephyrs documentation](https://vue-zephyrs.netlify.app/)

✌️