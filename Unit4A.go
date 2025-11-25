// Author: William Provost
// Version: 1.0.0
// Date: 2025-11-25
// Fileoverview: This program counts backward by 5's from 100 down to 0.

package main

import "fmt"

func main() {
	currentValue := 100

	fmt.Println("Backward count by 5's from 100 to 0:")

	for currentValue >= 0 {
		fmt.Println(currentValue)
		currentValue -= 5
	}

	fmt.Println("\nDone.")
}
