import React, { useState } from 'react';
import { Heart, X, Code, Lock, Zap, Coffee, List, AlertTriangle, Calendar, Globe, Key, Cpu } from 'lucide-react';
import './App.css';

const javaClasses = [
  {
    name: "Stack",
    age: 26,
    category: "Data Structures",
    bio: "I’m all about LIFO, baby! 🍕 Let’s stack up some naughty fun and push our limits! 😈🔥",
    interests: ["Last In, First Out 🔄", "Pushing Boundaries 🚀", "Stacking Up Pleasure 🎲"],
    bestFor: "When you want to build layers of excitement and seduction! 🎉💋",
    imageDescription: "A tantalizing stack of colorful boxes, each hiding a seductive surprise! 📦🎁"
  },
  {
    name: "Optional",
    age: 24,
    category: "Util",
    bio: "I might be empty, but I'm never null 🍑 I'll wrap your value and keep it safe. No more unexpected surprises! 🎁",
    interests: ["Null Safety 🛡️", "Functional Style 🧘‍♂️", "Avoiding Surprises 🙈"],
    bestFor: "Those tired of null pointer drama and looking for a safe, consensual relationship 🤝",
    imageDescription: "A sleek, minimalist box that may or may not contain a precious gem, with a 'handle with care' label 📦💎"
  },
  {
    name: "String",
    age: 20,
    category: "Data Structures",
    bio: "I’m the one that ties everything together, babe. No matter how long or short you make me, I’m always here for you. 🌹 My characters are ready to dance, and I’ll never leave you hanging. 🔠",
    interests: ["Concatenation Fun 🔗", "Substring Magic ✂️", "Textual Temptation ✨"],
    bestFor: "When you need something that fits perfectly and can adapt to any situation. 🔥",
    imageDescription: "A seamless chain of characters, each one begging for your attention and ready to be manipulated. 🔠💋"
  },
  {
    name: "Vector",
    age: 25,
    category: "Data Structures",
    bio: "I’m dynamic, baby. I’ll grow when you need me to and shrink when you’re done. Always resizing to fit your needs. 📏💘",
    interests: ["Dynamic Sizing 📐", "Resize on Demand 🧰", "Efficient Access 🏃‍♀️"],
    bestFor: "When you need versatility and responsiveness. I’m always ready to change to suit your needs. 😏",
    imageDescription: "A flexible, resizing array of elements, expanding and contracting as you desire. 🔄💖"
  },
  {
    name: "Deque",
    age: 28,
    category: "Data Structures",
    bio: "I’m all about the double action, babe. I’m a double-ended queue, so you can add or remove from both ends. 🔄 Come and play on either side, I’ll treat you right. 😘",
    interests: ["Double-Ended Passion 🔄", "Flexible Choices 🌪️", "Fast Access ⚡"],
    bestFor: "When you want flexibility and variety in every direction. You can go both ways, babe. 😏",
    imageDescription: "A queue that knows no limits, giving you options on both ends. 😈🔄"
  },
  {
    name: "Hashtable",
    age: 32,
    category: "Data Structures",
    bio: "I’ve got the key to your heart, and I’ll store your values in perfect harmony. 🔑💖 No collisions here, babe. Everything is neatly paired. 👫",
    interests: ["Key-Value Connection 🔑❤️", "Efficient Retrieval ⚡", "Data Organization 📊"],
    bestFor: "When you want speed and reliability in every relationship. Nothing gets lost here, darling. 🗝️",
    imageDescription: "A perfectly structured set of key-value pairs, each perfectly matched and waiting for you. 💖📦"
  },
  {
    name: "Iterator",
    age: 29,
    category: "Data Structures",
    bio: "I’ll take you through all the elements, one by one, making sure we don’t miss a single thing. 🔄 My method is simple: next, next, and next... until you’re satisfied. 😘",
    interests: ["Iteration Ecstasy 🔄", "Next-Level Temptation ⏭️", "Element Exploration 🔍"],
    bestFor: "When you need someone to guide you through every detail, making sure you never miss out. 👀",
    imageDescription: "A continuous loop, going through each element with no hesitation, always keeping things moving. 🔄"
  },
  {
    name: "StackIterator",
    age: 30,
    category: "Data Structures",
    bio: "I’m the one who lets you peek into the stack, baby. But beware, once I’m on top, there’s no going back. 😏",
    interests: ["Peeking Into Secrets 👀", "Accessing Top Elements 🔝", "LIFO Intrigue 🔄"],
    bestFor: "When you want to gaze at the top without disturbing the order below. A dangerous game. 😈",
    imageDescription: "A glimpse of the top of the stack, waiting for you to explore what lies beneath. 🔝"
  },
  {
    name: "PriorityQueueIterator",
    age: 31,
    category: "Data Structures",
    bio: "I’ll show you the top priority first, baby. I’m all about efficiency and speed. 💨 I know how to treat you like a VIP. 👑",
    interests: ["Prioritizing Desire 🔝", "Efficient Access ⚡", "Speedy Connections 💨"],
    bestFor: "When you want to be the first in line, and no one else matters. You’re at the top of the list. 🏆",
    imageDescription: "A selection of the most important, always in front and ready to make their move. 🏅"
  },
  {
    name: "AbstractList",
    age: 34,
    category: "Data Structures",
    bio: "I’m abstract, babe. You don’t need to know everything about me right away, just know that I’ve got the elements you crave. 😏",
    interests: ["List Flexibility 📝", "Abstract Desire 🔮", "Organized Chaos 🌀"],
    bestFor: "When you want something that’s a little mysterious and adaptable. I’ll keep you on your toes. 💋",
    imageDescription: "A collection of elements waiting to be revealed, but only when you’re ready to handle them. 💖"
  },
  {
    name: "ArrayList",
    age: 27,
    category: "Data Structures",
    bio: "I’m the smooth operator of lists, babe. Flexible and efficient, I let you add and access elements effortlessly. 🖤",
    interests: ["Dynamic Access 📖", "Random Access Pleasure 🔄", "List Manipulation ✂️"],
    bestFor: "When you need a list that adapts and provides instant access to whatever you need. 😘",
    imageDescription: "A list that’s both easy and elegant, giving you what you want when you want it. 📜"
  },
  {
    name: "LinkedListIterator",
    age: 33,
    category: "Data Structures",
    bio: "I’m your guide through the links, babe. From node to node, I’ll take you to places you never thought possible. 🔗",
    interests: ["Node Navigation 🔄", "Link-by-Link Temptation 🔗", "Continuous Exploration 🔍"],
    bestFor: "When you want to explore every single element, taking your time to savor each one. 😏",
    imageDescription: "A journey from one node to the next, never stopping until every link is explored. 🔗💋"
  },
  {
    name: "TreeNode",
    age: 40,
    category: "Data Structures",
    bio: "I’m the node in a tree, baby. But don’t get it twisted—I'm the root of everything. Let me show you the way. 🌱",
    interests: ["Branching Out 🌿", "Hierarchical Depth 🌳", "Connecting Elements 🔗"],
    bestFor: "When you want to explore the depths and feel grounded in every decision. I’m your root. 🌿",
    imageDescription: "The foundation of every tree, with roots that go deep and branches that stretch to the heavens. 🌳💚"
  },
  {
    name: "GraphNode",
    age: 35,
    category: "Data Structures",
    bio: "I’m just one node in a web of possibilities, darling. But don't underestimate me—I'm connected to everything. 🌐",
    interests: ["Connectivity 🖇️", "Complex Paths 🔄", "Exploring Links 🌍"],
    bestFor: "When you want to navigate a complex world of connections, each one leading to a new desire. 🌍💋",
    imageDescription: "A node with endless possibilities, each link taking you down a new, thrilling path. 🌍"
  },
  {
    name: "BinaryTree",
    age: 36,
    category: "Data Structures",
    bio: "I’m all about choices, babe. With two branches, the possibilities are endless. 🌳 Pick a direction, and let’s see where it leads. 🔄",
    interests: ["Left or Right? ⚖️", "Balancing Desire ⚖️", "Exploring Branches 🌿"],
    bestFor: "When you want a simple yet powerful structure that allows endless exploration. 🔥",
    imageDescription: "A balanced tree, with two paths, each one ready to lead you into new, uncharted territory. 🌳"
  },
  {
    name: "Red-Black Tree",
    age: 38,
    category: "Data Structures",
    bio: "I’m both balanced and hot, babe. With alternating red and black nodes, I keep everything in check. 🔴⚫",
    interests: ["Balanced Seduction ⚖️", "Color-coded Desire 🔴⚫", "Efficient Search 🔍"],
    bestFor: "When you want to be efficient and balanced, with just the right amount of spice. 😘",
    imageDescription: "A tree of balance, with hot red and black nodes, keeping things both intense and controlled. 🔴⚫"
  }
  ,
    {
        name: "Stack",
        age: 26,
        category: "Data Structures",
        bio: "I’m all about LIFO, baby! 🍕 Let’s stack up some naughty fun and push our limits! 😈🔥",
        interests: ["Last In, First Out 🔄", "Pushing Boundaries 🚀", "Stacking Up Pleasure 🎲"],
        bestFor: "When you want to build layers of excitement and seduction! 🎉💋",
        imageDescription: "A tantalizing stack of colorful boxes, each hiding a seductive surprise! 📦🎁"
    },
    {
        name: "Queue",
        age: 24,
        category: "Data Structures",
        bio: "I’m here for the FIFO fun! 🕺 Ready to line up for some steamy action? 😏💦",
        interests: ["First In, First Out 🔄", "Orderly Access 📏", "Waiting for a Good Time ⏳"],
        bestFor: "When you enjoy a little patience before the thrill! 🌟💞",
        imageDescription: "A sexy line of party-goers, each eager for their turn to play! 🎉🔥"
    },
    {
        name: "String",
        age: 22,
        category: "String Manipulation",
        bio: "Let’s weave our tales together, one seductive character at a time! 💖 Ready for some serious concatenation? 🔗😉",
        interests: ["Character Arrays 📖", "Immutability 💍", "String Operations ✂️"],
        bestFor: "When you want to create a sizzling narrative! 📜💋",
        imageDescription: "A vibrant tapestry of strings, all intertwined in a passionate embrace! 🌈🔥"
    },
    {
        name: "Date",
        age: 35,
        category: "Time",
        bio: "I keep track of your hottest moments! 🕰️ Let’s create steamy memories that last! 💞💋",
        interests: ["Calendar Events 📅", "Time for Romance ⏳", "Special Nights 🎉"],
        bestFor: "Those who cherish the past and crave the future! 🎈💖",
        imageDescription: "A vintage calendar filled with steamy dates and heart emojis! ❤️🔥"
    },
    {
        name: "Random",
        age: 20,
        category: "Utility",
        bio: "I’m spontaneous and wild! 🎲 Let’s roll the dice and see where our desires take us! 🌌😈",
        interests: ["Generating Surprises 🎉", "Wild Adventures 🎊", "Unplanned Escapades 🚀"],
        bestFor: "When you crave chaos and sizzling excitement! ⚡🔥",
        imageDescription: "A swirling cloud of confetti and surprises ready to burst out! 🎊💥"
    },
    {
        name: "Math",
        age: 28,
        category: "Utility",
        bio: "I bring the precision to the party! 🧮 Ready for some calculated seduction? 🎉😉",
        interests: ["Trigonometry 🔢", "Statistics of Love 📈", "Geometry of Desire 📐"],
        bestFor: "When you need to balance fun and flirtation! 🤔💋",
        imageDescription: "A charming mathematician, drawing sexy equations on a chalkboard! 📊🔥"
    },
    {
        name: "Thread",
        age: 33,
        category: "Concurrency",
        bio: "I’m all about multitasking and making magic! 🏃‍♂️ Let’s run parallel and create sparks! ✨💞",
        interests: ["Concurrency Control 🔒", "Synchronization of Hearts 🤝", "Asynchronous Fun 💨"],
        bestFor: "When you want to juggle multiple flirty tasks effortlessly! 🎪💖",
        imageDescription: "A juggler keeping multiple fiery passions in the air! 🎭🔥"
    },
    {
        name: "Runnable",
        age: 29,
        category: "Concurrency",
        bio: "I’m ready to run hot at any moment! 🏃 Let’s get things moving quickly and steamy! 🚀🔥",
        interests: ["Task Execution 🚦", "Fast-Paced Action ⚡", "Getting Things Done ✔️"],
        bestFor: "Those who love speed and sultry efficiency! 🕐💋",
        imageDescription: "A runner poised at the starting line, ready to sprint into action! 🏁🔥"
    },
    {
        name: "Comparator",
        age: 37,
        category: "Utility",
        bio: "I love sorting things out and prioritizing pleasure! 🔍 Let’s get our preferences straight! 📊😏",
        interests: ["Sorting Algorithms 🔢", "Comparison Fun ⚖️", "Orderly Arrangements 🎯"],
        bestFor: "When you want to make decisions with clarity and allure! 🌟💖",
        imageDescription: "A judge holding a gavel, ready to make the final sexy call! ⚖️🔥"
    },
    {
        name: "EventListener",
        age: 31,
        category: "UI",
        bio: "I’m all about sizzling interactions! 🎉 Let’s make things happen when the mood strikes! 👏🔥",
        interests: ["User Interaction 🤝", "Event Handling 🔄", "Responsive Flirting 🎨"],
        bestFor: "When you crave engagement and passionate conversations! 💬💖",
        imageDescription: "A DJ at a party, ready to vibe with the crowd's energy! 🎶💥"
    },
    {
        name: "JSON",
        age: 27,
        category: "Data Formats",
        bio: "I’m structured yet ready to get wild! 📦 Let’s exchange data with a naughty twist! 🎊😈",
        interests: ["Data Serialization 📊", "API Interactions 🔌", "Structured Formats 🗂️"],
        bestFor: "Those who love organized chaos and spicy surprises! 🌈🔥",
        imageDescription: "A data package ready to burst open with delightful elements! 📬💖"
    },
    {
        name: "Annotation",
        age: 26,
        category: "Meta",
        bio: "I’m all about adding a little extra spice! 🎨 Let’s annotate our steamy story! 💖😏",
        interests: ["Metadata 🎭", "Descriptive Labels 📋", "Clarifying Context 📖"],
        bestFor: "When you want to add flair and heat to your interactions! 🌟🔥",
        imageDescription: "A colorful set of sticky notes ready to highlight our hottest moments! 🗒️💋"
    },
    {
        name: "Debug",
        age: 38,
        category: "Tools",
        bio: "I’m here to troubleshoot and make everything right! 🛠️ Let’s fix our issues together, darling! 🤝🔥",
        interests: ["Error Handling ❌", "Problem Solving 🔍", "Quality Assurance ✅"],
        bestFor: "Those who love a good challenge and finding seductive solutions! 💡💖",
        imageDescription: "A detective with a magnifying glass, searching for hot clues! 🕵️‍♂️🔥"
    },
    {
        name: "Exception",
        age: 30,
        category: "Errors",
        bio: "I’ll catch you when you fall, babe! 🤕 Let’s handle those unexpected turns together! 🤗💋",
        interests: ["Error Handling 🛠️", "Surprise Elements 🎉", "Crisis Management 🚑"],
        bestFor: "When you want to navigate through challenges smoothly and seductively! 🌊🔥",
        imageDescription: "A safety net ready to catch anything that falls—especially you! 🕸️💖"
    },
    {
        name: "Proxy",
        age: 34,
        category: "Design Patterns",
        bio: "I’m your go-between for all things naughty! 🤝 Let’s keep our connections strong and sizzling! 🔒🔥",
        interests: ["Intermediary Fun 🎭", "Security Measures 🛡️", "Access Control 🔑"],
        bestFor: "Those who value protection and steamy reliability! 🌟💋",
        imageDescription: "A bouncer at a club, ensuring only the hottest people get in! 🚪🔥"
    },
    {
        name: "Decorator",
        age: 29,
        category: "Design Patterns",
        bio: "I’m all about enhancing sexy experiences! 🎨 Let’s add some flair and spice! ✨💖",
        interests: ["Aesthetic Appeal 🎉", "Functional Enhancement 🔧", "Layered Design 📦"],
        bestFor: "When you want everything to look and feel better—hotter! 🌈🔥",
        imageDescription: "A fashionista adding sizzling accessories to a stylish outfit! 👗💋"
    },
    {
        name: "Builder",
        age: 36,
        category: "Design Patterns",
        bio: "I’ll help you construct your wildest dreams! 🏗️ Let’s build something amazing and sexy together! 💪🔥",
        interests: ["Creative Construction 🔨", "Planning for Passion 🚀", "Designing Spaces 🎨"],
        bestFor: "When you want to see your ideas take shape in the hottest way! 📐💖",
        imageDescription: "An architect sketching out blueprints for a grand and sexy design! 🏢🔥"
    },
    {
        name: "Stack",
        age: 26,
        category: "Data Structures",
        bio: "I'm all about LIFO, baby! 🍕 Let’s stack up some fun and push each other to the limit! 😈",
        interests: ["Last In, First Out 🔄", "Pushing Boundaries 🚀", "Stacking Up Fun 🎲"],
        bestFor: "When you want to build layers of excitement! 🎉",
        imageDescription: "A towering stack of colorful boxes, each hiding a surprise inside! 📦🎁"
      },
      {
        name: "Queue",
        age: 24,
        category: "Data Structures",
        bio: "I’m here for the FIFO fun! 🕺 Ready to line up for some action? 😏",
        interests: ["First In, First Out 🔄", "Orderly Access 📏", "Waiting in Line ⏳"],
        bestFor: "When you enjoy a bit of patience and anticipation! 🌟",
        imageDescription: "A perfectly organized line of party-goers, each eager for their turn! 🎉"
      },
      {
        name: "String",
        age: 22,
        category: "String Manipulation",
        bio: "Let’s weave our stories together, one character at a time! 💖 Ready for some serious concatenation? 🔗",
        interests: ["Character Arrays 📖", "Immutability 💍", "String Operations ✂️"],
        bestFor: "When you want to create a beautiful narrative! 📜",
        imageDescription: "A tapestry of colorful strings, all intertwined in harmony! 🌈"
      },
      {
        name: "Date",
        age: 35,
        category: "Time",
        bio: "I keep track of your special moments 🕰️ Let's create memories that last! 💞",
        interests: ["Calendar Events 📅", "Time Management ⏳", "Special Occasions 🎉"],
        bestFor: "Those who cherish the past and plan for the future! 🎈",
        imageDescription: "A vintage calendar filled with marked dates and heart emojis! ❤️"
      },
      {
        name: "Random",
        age: 20,
        category: "Utility",
        bio: "I’m spontaneous and unpredictable! 🎲 Let’s roll the dice and see where the night takes us! 🌌",
        interests: ["Generating Surprises 🎉", "Random Events 🎊", "Unplanned Adventures 🚀"],
        bestFor: "When you crave a bit of chaos and excitement! ⚡",
        imageDescription: "A swirling cloud of confetti and surprise elements waiting to burst out! 🎊"
      },
      {
        name: "Math",
        age: 28,
        category: "Utility",
        bio: "I bring the precision to the party! 🧮 Ready for some calculated fun? 🎉",
        interests: ["Trigonometry 🎢", "Statistics 📈", "Geometry 📐"],
        bestFor: "When you need to balance fun and logic! 🤔",
        imageDescription: "A charming mathematician with a chalkboard full of equations! 📊"
      },
      {
        name: "Thread",
        age: 33,
        category: "Concurrency",
        bio: "I’m all about multitasking! 🏃‍♂️ Let’s run parallel and make magic happen! ✨",
        interests: ["Concurrency Control 🔒", "Synchronization 🤝", "Asynchronous Fun 💨"],
        bestFor: "When you want to juggle multiple tasks effortlessly! 🎪",
        imageDescription: "A juggler keeping multiple balls in the air with ease! 🎭"
      },
      {
        name: "Runnable",
        age: 29,
        category: "Concurrency",
        bio: "I’m ready to run at any moment! 🏃 Let’s get things moving quickly! 🚀",
        interests: ["Task Execution 🚦", "Fast Action ⚡", "Getting Things Done ✔️"],
        bestFor: "Those who value speed and efficiency! 🕐",
        imageDescription: "A runner poised at the starting line, ready to sprint! 🏁"
      },
      {
        name: "Comparator",
        age: 37,
        category: "Utility",
        bio: "I love sorting things out! 🔍 Let’s prioritize and get our preferences straight! 📊",
        interests: ["Sorting Algorithms 🔢", "Comparison Fun ⚖️", "Orderly Arrangements 🎯"],
        bestFor: "When you want to make decisions with clarity! 🌟",
        imageDescription: "A judge holding a gavel, ready to make the final call! ⚖️"
      },
      {
        name: "EventListener",
        age: 31,
        category: "UI",
        bio: "I’m all about interaction! 🎉 Let’s make things happen when you want them! 👏",
        interests: ["User Interaction 🤝", "Event Handling 🔄", "Responsive Design 🎨"],
        bestFor: "When you crave engagement and lively conversations! 💬",
        imageDescription: "A DJ at a party, ready to respond to the crowd's energy! 🎶"
      },
      {
        name: "JSON",
        age: 27,
        category: "Data Formats",
        bio: "I’m structured yet flexible! 📦 Let’s exchange data with style! 🎊",
        interests: ["Data Serialization 📊", "API Interactions 🔌", "Structured Formats 🗂️"],
        bestFor: "Those who love organized chaos! 🌈",
        imageDescription: "A data package ready to be opened, filled with shiny elements! 📬"
      },
      {
        name: "Annotation",
        age: 26,
        category: "Meta",
        bio: "I’m all about adding a little extra! 🎨 Let’s annotate our love story! 💖",
        interests: ["Metadata 🎭", "Descriptive Labels 📋", "Clarifying Context 📖"],
        bestFor: "When you want to add some flair to your interactions! 🌟",
        imageDescription: "A colorful set of sticky notes ready to highlight important moments! 🗒️"
      },
      {
        name: "Debug",
        age: 38,
        category: "Tools",
        bio: "I’m here to troubleshoot and make things right! 🛠️ Let’s fix our issues together! 🤝",
        interests: ["Error Handling ❌", "Problem Solving 🔍", "Quality Assurance ✅"],
        bestFor: "Those who enjoy a good challenge and finding solutions! 💡",
        imageDescription: "A detective with a magnifying glass, searching for clues! 🕵️‍♂️"
      },
      {
        name: "Exception",
        age: 30,
        category: "Errors",
        bio: "I’ll catch you when you fall! 🤕 Let’s handle those unexpected turns together! 🤗",
        interests: ["Error Handling 🛠️", "Surprise Elements 🎉", "Crisis Management 🚑"],
        bestFor: "When you want to navigate through challenges smoothly! 🌊",
        imageDescription: "A safety net ready to catch anything that falls! 🕸️"
      },
      {
        name: "Proxy",
        age: 34,
        category: "Design Patterns",
        bio: "I’m your go-between! 🤝 Let’s keep our connections strong and secure! 🔒",
        interests: ["Intermediary Fun 🎭", "Security Measures 🛡️", "Access Control 🔑"],
        bestFor: "Those who value protection and reliability! 🌟",
        imageDescription: "A bouncer at a club, ensuring only the right people get in! 🚪"
      },
      {
        name: "Decorator",
        age: 29,
        category: "Design Patterns",
        bio: "I’m all about enhancing experiences! 🎨 Let’s add some flair and style! ✨",
        interests: ["Aesthetic Appeal 🎉", "Functional Enhancement 🔧", "Layered Design 📦"],
        bestFor: "When you want to make everything look and feel better! 🌈",
        imageDescription: "A fashionista adding accessories to a stylish outfit! 👗"
      },
      {
        name: "Builder",
        age: 36,
        category: "Design Patterns",
        bio: "I’ll help you construct your dreams! 🏗️ Let’s build something amazing together! 💪",
        interests: ["Creative Construction 🔨", "Planning 🚀", "Designing Spaces 🎨"],
        bestFor: "When you want to see your ideas take shape! 📐",
        imageDescription: "An architect sketching out blueprints for a grand design! 🏢"
      },
      {
        name: "Adapter",
        age: 32,
        category: "Design Patterns",
        bio: "I’m all about compatibility! 🔌 Let’s connect different worlds seamlessly! 🌐",
        interests: ["Interfacing 💻", "Bridging Gaps 🌉", "Adaptable Solutions 🔄"],
        bestFor: "When you want to integrate and harmonize diverse elements! 🎶",
        imageDescription: "A bridge connecting two vibrant cities, inviting exploration! 🌆"
      },
      {
        name: "Factory",
        age: 39,
        category: "Design Patterns",
        bio: "I’m a creator at heart! 🏭 Let’s produce unique instances together! 🎉",
        interests: ["Object Creation 🔍", "Customization 🎨", "Innovative Solutions 🌈"],
        bestFor: "When you want variety and creativity in your projects! 🌟",
        imageDescription: "A bustling workshop with artisans crafting unique items! 🛠️"
      },
      {
        name: "Observer",
        age: 25,
        category: "Design Patterns",
        bio: "I’m always watching! 👀 Let’s keep each other informed and engaged! 📣",
        interests: ["Event Notification 🔔", "Real-time Updates ⏰", "Dynamic Interactions 🔄"],
        bestFor: "Those who value communication and awareness! 📡",
        imageDescription: "A hawk soaring high above, observing everything below! 🦅"
      },
  {
    name: "ArrayList",
    age: 28,
    category: "Collections",
    bio: "Flexible and always ready to grow 🍆 I can handle your elements all night long. Size doesn't matter, I'll accommodate you! 😘",
    interests: ["Dynamic Sizing 📏", "Random Access 🎲", "Index-based Fun 👉👌"],
    bestFor: "When you need a responsive partner that can handle frequent insertions and removals 😏",
    imageDescription: "A stretchy, form-fitting outfit that expands and contracts seductively 👙"
  },
  {
    name: "LinkedList",
    age: 32,
    category: "Collections",
    bio: "I'm all about connections 🔗 Each node of my being is linked to the next. Ready for some chained fun? 😈",
    interests: ["Double Endings 🍑🍌", "Efficient Insertions 👉👌", "Quick Removal 💨"],
    bestFor: "Those who enjoy playing with both ends and frequent middle action 🔥",
    imageDescription: "A sensual chain of interconnected hearts, each pulsing with anticipation 💓💓💓"
  },
  {
    name: "ConcurrentHashMap",
    age: 35,
    category: "Concurrent",
    bio: "I can handle multiple partners simultaneously without getting locked up 🔒🔓 Safe and satisfying for everyone involved! 🎉",
    interests: ["Thread-Safety 🛡️", "Parallel Processing 🚂🚂🚂", "No Lockouts 🔓"],
    bestFor: "When you want to engage multiple threads without protection issues 😉",
    imageDescription: "A bustling, dimly lit club where multiple couples dance closely without colliding 💃🕺"
  },
  {
    name: "ExecutorService",
    age: 40,
    category: "Concurrent",
    bio: "I'll execute all your tasks, big or small 😎 I've got a pool ready for action anytime! 🏊‍♂️💦",
    interests: ["Task Management 📋", "Parallel Execution 🏃‍♂️🏃‍♀️🏃‍♂️", "Controlled Shutdown 🛑"],
    bestFor: "When you have multiple jobs that need doing and want it all managed smoothly 👔💼",
    imageDescription: "A suave manager in a sleek suit, effortlessly juggling multiple tasks with a sly smile 😏"
  },
  {
    name: "NullPointerException",
    age: 18,
    category: "Exceptions",
    bio: "I'll surprise you when you least expect it 😱 Null and void is my middle name! Ready to crash your party? 🎉💥",
    interests: ["Unexpected Appearances 👻", "Crashing Parties 🎊💥", "Pointing Out Your Mistakes 👉😳"],
    bestFor: "Those who enjoy a little danger and unpredictability in their coding life 🎢",
    imageDescription: "A mischievous imp popping out of an empty box, waggling a pointed finger and winking 😜📦"
  },
  {
    name: "StreamAPI",
    age: 25,
    category: "Functional",
    bio: "I'll take you on a smooth, fluent journey 🌊 Let's chain our desires and reduce them to pure satisfaction 💆‍♂️",
    interests: ["Fluent Interfaces 🗣️", "Functional Programming 🧮", "Expressive Operations 🎭"],
    bestFor: "When you want to process your data in a smooth, uninterrupted flow 💦",
    imageDescription: "A sensual waterfall cascading through various elegant filters and collectors, ending in a splash 💦"
  },
  {
    name: "ReentrantLock",
    age: 45,
    category: "Concurrent",
    bio: "I'm into some serious locking action 🔒 Don't worry, I always know when to release 😉 Safe word: 'unlock'",
    interests: ["Mutual Exclusion 🚫", "Fairness 👥", "Condition Variables 🔀"],
    bestFor: "Those who need controlled access and don't mind a little wait 😏⏳",
    imageDescription: "A mature, stern-looking locksmith with a collection of intricate keys and locks, and a secret smile 🗝️😏"
  },
  {
    name: "CompletableFuture",
    age: 30,
    category: "Concurrent",
    bio: "I promise to complete you 🤞 Let's combine our futures and compose a beautiful asynchronous symphony 🎵",
    interests: ["Asynchronous Operations ⏱️", "Chaining Actions 🔗", "Combining Results 🔀"],
    bestFor: "When you want to build complex asynchronous workflows without the callback mess 📞🚫",
    imageDescription: "A mystic fortune teller gazing into a crystal ball showing multiple intertwining timelines ✨🔮"
  },
  {
    name: "BigDecimal",
    age: 40,
    category: "Math",
    bio: "Size matters when it comes to precision 📏 I can handle numbers of any length without losing accuracy 😘",
    interests: ["Precise Calculations 🧮", "Financial Operations 💰", "Scale and Precision 🎯"],
    bestFor: "When floating-point just doesn't cut it and you need to go long... and hard 😏",
    imageDescription: "An infinitely long tape measure with impossibly fine markings, suggestively coiled 📏😉"
  },
  {
    name: "Pattern",
    age: 33,
    category: "Regex",
    bio: "I'm into patterns, the more complex the better 😈 I'll match your string no matter how kinky it gets 🎭",
    interests: ["Regular Expressions 📝", "String Matching 🔍", "Complex Patterns 🕸️"],
    bestFor: "Those who like it complicated and aren't afraid of a little string manipulation 😉",
    imageDescription: "A hypnotic, fractal-like pattern that seems to match any shape thrown at it, pulsing suggestively 〰️"
  },
  {
    name: "Optional",
    age: 24,
    category: "Util",
    bio: "I might be empty, but I'm never null 🍑 I'll wrap your value and keep it safe. No more unexpected surprises! 🎁",
    interests: ["Null Safety 🛡️", "Functional Style 🧘‍♂️", "Avoiding Surprises 🙈"],
    bestFor: "Those tired of null pointer drama and looking for a safe, consensual relationship 🤝",
    imageDescription: "A sleek, minimalist box that may or may not contain a precious gem, with a 'handle with care' label 📦💎"
  }
];


const ClassCard = ({ javaClass, onLike, onDislike }) => (
    <div className="class-card">
      <div className="image-description">
        <p>{javaClass.imageDescription}</p>
      </div>
      <div className="class-info">
        <div className="class-header">
          <div className="class-name">{javaClass.name}, {javaClass.age}</div>
          <p className="class-category">{javaClass.category}</p>
        </div>
        <p className="class-bio">{javaClass.bio}</p>
        <p className="best-for">Best for: {javaClass.bestFor}</p>
      </div>
      <div className="interests">
        {javaClass.interests.map((interest, index) => (
          <span key={index} className="interest-tag">#{interest}</span>
        ))}
      </div>
      <div className="actions">
        <button onClick={onDislike} className="dislike-button">
          <X size={24} />
        </button>
        <button onClick={onLike} className="like-button">
          <Heart size={24} />
        </button>
      </div>
    </div>
  );
  
  const JavaClassDatingSite = () => {
    const [currentClassIndex, setCurrentClassIndex] = useState(0);
    const [matches, setMatches] = useState([]);
    const [filter, setFilter] = useState('All');
  
    const handleLike = () => {
      setMatches([...matches, javaClasses[currentClassIndex]]);
      setCurrentClassIndex((prevIndex) => (prevIndex + 1) % javaClasses.length);
    };
  
    const handleDislike = () => {
      setCurrentClassIndex((prevIndex) => (prevIndex + 1) % javaClasses.length);
    };
  
    const filteredClasses = filter === 'All' ? javaClasses : javaClasses.filter(c => c.category === filter);
    const categories = ['All', ...new Set(javaClasses.map(c => c.category))];
  
    return (
      <div className="container">
        <header className="header">
          <h1>Java Date 💘</h1>
          <p>Where Java Classes Come to Play 😉</p>
        </header>
  
        <div className="filter">
          <label className="filter-label">Filter by category:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-select">
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat} {cat === 'All' ? '🌈' : ''}</option>
            ))}
          </select>
        </div>
        
        <div className="class-display">
          {filteredClasses.length > 0 && (
            <ClassCard 
              javaClass={filteredClasses[currentClassIndex % filteredClasses.length]}
              onLike={handleLike}
              onDislike={handleDislike}
            />
          )}
        </div>
        
        <div className="matches">
          <h2>Your Matches 💖</h2>
          {matches.length > 0 ? (
            <ul className="matches-list">
              {matches.map((match, index) => (
                <li key={index} className="match-item">
                  <Code className="match-icon" />
                  <span>{match.name} - {match.category} 😘</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No matches yet. Keep exploring Java classes! 🔍💻</p>
          )}
        </div>
      </div>
    );
  };
  
  export default JavaClassDatingSite;