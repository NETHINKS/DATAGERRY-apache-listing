var newDoctype = document.implementation.createDocumentType(
 'html'
);

document.doctype.parentNode.replaceChild(newDoctype,document.doctype);
