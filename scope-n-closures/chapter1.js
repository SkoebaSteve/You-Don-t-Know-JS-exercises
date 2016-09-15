function foo(a) /* LHS */ {
    var b /*LHS */ = a /* RHS */;
    return a + b; /* 2x RHS */
}

var c /* LHS */ = foo( 2 ) /*RHS */; 