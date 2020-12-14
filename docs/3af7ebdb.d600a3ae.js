(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return s}));var l=n(2),a=n(6),o=(n(0),n(77)),i={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/"},p={unversionedId:"docs/installation",id:"docs/installation",isDocsHomePage:!1,title:"Installation",description:"1. graphql-ppx",source:"@site/docs/docs/installation.md",slug:"/",permalink:"/rescript-apollo-client/docs/",editUrl:"https://github.com/reasonml-community/rescript-apollo-client/edit/master/documentation/docs/docs/installation.md",version:"current",sidebar_label:"Installation"},r=[{value:"1. <code>graphql-ppx</code>",id:"1-graphql-ppx",children:[]},{value:"2. Apollo Client",id:"2-apollo-client",children:[]},{value:"3. Apollo-Specific <code>graphql-ppx</code> Configuration",id:"3-apollo-specific-graphql-ppx-configuration",children:[]}],c={rightToc:r};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(l.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"1-graphql-ppx"},"1. ",Object(o.b)("inlineCode",{parentName:"h3"},"graphql-ppx")),Object(o.b)("p",null,"We rely on Graphql-ppx for typesafe GraphQL operations and fragments in ReasonML. ",Object(o.b)("a",Object(l.a)({parentName:"p"},{href:"https://beta.graphql-ppx.com"}),"Go to the official documentation")," for installation instructions."),Object(o.b)("p",null,"You should now have a ",Object(o.b)("inlineCode",{parentName:"p"},"graphql_schema.json")," in your project somewhere. Make sure it's always up-to-date!"),Object(o.b)("h3",{id:"2-apollo-client"},"2. Apollo Client"),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-sh"}),"npm install rescript-apollo-client @apollo/client\n")),Object(o.b)("h3",{id:"3-apollo-specific-graphql-ppx-configuration"},"3. Apollo-Specific ",Object(o.b)("inlineCode",{parentName:"h3"},"graphql-ppx")," Configuration"),Object(o.b)("p",null,"Add the following under ",Object(o.b)("inlineCode",{parentName:"p"},"bs-dependencies")," and ",Object(o.b)("inlineCode",{parentName:"p"},"graphql"),", in your ",Object(o.b)("inlineCode",{parentName:"p"},"bsconfig.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(l.a)({parentName:"pre"},{className:"language-diff"}),'{\n  "graphql": {\n+   "apolloMode": true,\n+   "extendMutation": "ApolloClient.GraphQL_PPX.ExtendMutation",\n+   "extendQuery": "ApolloClient.GraphQL_PPX.ExtendQuery",\n+   "extendSubscription": "ApolloClient.GraphQL_PPX.ExtendSubscription",\n+   "templateTagReturnType": "ApolloClient.GraphQL_PPX.templateTagReturnType",\n+   "templateTagImport": "gql",\n+   "templateTagLocation": "@apollo/client"\n  },\n  "ppx-flags": ["@reasonml-community/graphql-ppx/ppx"],\n  "bs-dependencies: [\n    "@reasonml-community/graphql-ppx"\n+   "rescript-apollo-client"\n  ]\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"apolloMode"')," automaticaly sprinkles ",Object(o.b)("inlineCode",{parentName:"li"},"__typename")," throughout our operation and fragment definitions"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"templateTag*"')," is how we tell ",Object(o.b)("inlineCode",{parentName:"li"},"graphql-ppx")," to wrap every operation with ",Object(o.b)("inlineCode",{parentName:"li"},"gql")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},'"extend*"')," allows ",Object(o.b)("inlineCode",{parentName:"li"},"rescript-apollo-client")," to automatically decorate the generated modules with Apollo-specific things like the correct hook for that operation!")))}s.isMDXComponent=!0}}]);