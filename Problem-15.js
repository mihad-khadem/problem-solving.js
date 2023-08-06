function foo() {
    console.log('foo');
    return foo;
}
function bar(){
    console.log('bar');
    return bar;
}
foo(bar());
bar();

foo();