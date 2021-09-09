"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[983],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4027:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"debug",title:"Debugging"},s=void 0,c={unversionedId:"debug",id:"debug",isDocsHomePage:!1,title:"Debugging",description:"NOTE: Verbose logging with DEBUG level can be turned on with --log-level=DEBUG.  By default, the --log-level flag is set to minimum log level INFO. Acceptable values for minimum log level are [DEBUG, INFO, WARNING, ERROR]. In production, this flag should not be set to DEBUG.",source:"@site/docs/debug.md",sourceDirName:".",slug:"/debug",permalink:"/gatekeeper/website/docs/docs/debug",editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/docs/debug.md",tags:[],version:"current",frontMatter:{id:"debug",title:"Debugging"},sidebar:"docs",previous:{title:"Metrics",permalink:"/gatekeeper/website/docs/docs/metrics"},next:{title:"Emergency Recovery",permalink:"/gatekeeper/website/docs/docs/emergency"}},p=[{value:"Viewing the Request Object",id:"viewing-the-request-object",children:[]},{value:"Tracing",id:"tracing",children:[]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: Verbose logging with DEBUG level can be turned on with ",(0,i.kt)("inlineCode",{parentName:"p"},"--log-level=DEBUG"),".  By default, the ",(0,i.kt)("inlineCode",{parentName:"p"},"--log-level")," flag is set to minimum log level ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO"),". Acceptable values for minimum log level are ","[",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"WARNING"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ERROR"),"]",". In production, this flag should not be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG"),".")),(0,i.kt)("h2",{id:"viewing-the-request-object"},"Viewing the Request Object"),(0,i.kt)("p",null,"A simple way to view the request object is to use a constraint/template that\ndenies all requests and outputs the request object as its rejection message."),(0,i.kt)("p",null,"Example template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1beta1\nkind: ConstraintTemplate\nmetadata:\n  name: k8sdenyall\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sDenyAll\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8sdenyall\n\n        violation[{"msg": msg}] {\n          msg := sprintf("REVIEW OBJECT: %v", [input.review])\n        }\n')),(0,i.kt)("p",null,"Example constraint:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sDenyAll\nmetadata:\n  name: deny-all-namespaces\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Namespace"]\n')),(0,i.kt)("h2",{id:"tracing"},"Tracing"),(0,i.kt)("p",null,"In debugging decisions and constraints, a few pieces of information can be helpful:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cached data and existing rules at the time of the request"),(0,i.kt)("li",{parentName:"ul"},"A trace of the evaluation"),(0,i.kt)("li",{parentName:"ul"},"The input document being evaluated")),(0,i.kt)("p",null,"Writing out this information for every request would be very expensive, and it would be hard\nto find the relevant logs for a given request. Instead, Gatekeeper allows users to specify\nresources and requesting users for which information will be logged. They can do so by\nconfiguring the ",(0,i.kt)("inlineCode",{parentName:"p"},"Config")," resource, which lives in the ",(0,i.kt)("inlineCode",{parentName:"p"},"gatekeeper-system")," namespace."),(0,i.kt)("p",null,"Below is an example of a config resource:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: config.gatekeeper.sh/v1alpha1\nkind: Config\nmetadata:\n  name: config\n  namespace: "gatekeeper-system"\nspec:\n  # Data to be replicated into OPA\n  sync:\n    syncOnly:\n      - group: ""\n        version: "v1"\n        kind: "Namespace"\n  validation:\n    # Requests for which we want to run traces\n    traces:\n        # The requesting user for which traces will be run\n      - user: "user_to_trace@company.com"\n        kind:\n          # The group, version, kind for which we want to run a trace\n          group: ""\n          version: "v1"\n          kind: "Namespace"\n        # If dump is defined and set to `All`, also dump the state of OPA\n        dump: "All"\n')),(0,i.kt)("p",null,"Traces will be written to the stdout logs of the Gatekeeper controller."),(0,i.kt)("p",null,"If there is an error in the Rego in the ConstraintTemplate, there are cases where it is still created via ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f [CONSTRAINT_TEMPLATE_FILENAME].yaml"),"."),(0,i.kt)("p",null,"When applying the constraint using ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl apply -f constraint.yaml")," with a ConstraintTemplate that contains incorrect Rego, and error will occur: ",(0,i.kt)("inlineCode",{parentName:"p"},'error: unable to recognize "[CONSTRAINT_FILENAME].yaml": no matches for kind "[NAME_OF_CONSTRAINT]" in version "constraints.gatekeeper.sh/v1beta1"'),"."),(0,i.kt)("p",null,"To find the error, run ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl get -f [CONSTRAINT_TEMPLATE_FILENAME].yaml -o yaml"),". Build errors are shown in the ",(0,i.kt)("inlineCode",{parentName:"p"},"status")," field."))}d.isMDXComponent=!0}}]);