var luaCode = 'print("BEBRA")';

var cCode = `#include <stdio.h>

int main() {
    printf("BEBRA");
    return 0;
}`


var csCode = `using System;

namespace MyBebraApp {
	class Program {
		static void Main() {
			Console.WriteLine("BEBRA");
		}
	}
}`

var cppCode = `#include <iostream>

int main() {
    std::cout << "BEBRA" << std::endl;
    return 0;
}`

var kotlinCode = `fun main() {
    println("BEBRA")
}`

var pythonCode = 'print("BEBRA")'

var ponylangCode = `actor Main
    new create(e: Env) =>
        e.out.print("BEBRA")`

var brainfuckCode = '>++++[<++++++++>-]<[->++<]>++.+++.---.++++++++++++++++.-----------------.'

var bashCode = 'echo BEBRA'

var rubyCode = 'print("BEBRA")'

var phpCode = `<?php
echo "BEBRA";
?>`

var javascriptCode = 'console.log("BEBRA")'

var javaCode = `public class Main {
    public static void main(String []args) {
        System.out.println("BEBRA");
    }
}`

function OnClickCopy(el, arg) {
	navigator.clipboard.writeText(eval(`${arg}Code`))
	var span = document.createElement("span");
	span.textContent = 'Copied';
	el.innerHTML = ""
	el.appendChild(span)
	setTimeout(function() {
		span.textContent = 'Copied';
		el.appendChild(span)
		el.innerHTML = "Copy";
	}, 3000)
}