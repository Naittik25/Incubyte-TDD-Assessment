# String Calculator - TDD Implementation

## Overview
This repository contains a string calculator implementation developed using Test-Driven Development (TDD) principles. The calculator supports various input formats and delimiters while handling edge cases like negative numbers and large values.

## Technology Stack

- **Runtime**: Node.js
- **Testing Framework**: Jest
- **Package Manager**: npm
- **Language**: JavaScript
- **TDD Methodology**: Full test coverage with iterative development

## Features

- ✅ Handles empty strings by returning 0  
- ✅ Supports comma (`,`) and newline (`\n`) as default delimiters  
- ✅ Allows custom single or multiple delimiters (including multi-character ones)  
- ✅ Ignores numbers greater than 1000  
- ✅ Throws errors for negative numbers with detailed message 

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Naittik25/Incubyte-TDD-Assessment.git
   cd string-calculator

2. Install dependencies:  npm install

3. Testing
   Run the test suite with:  npm test

# Test Coverage
The test suite includes:

Empty string handling
Single and multiple number inputs
Various delimiter combinations
Negative number validation
Large number filtering

# Development

This project follows TDD principles with tests written in Jest.
The implementation supports:
Multiple delimiters of varying length
Type safety with number conversion
Comprehensive input validation

## 📷 Test Screenshots

### Empty string returns 0
![Empty string returns 0](./screenshots/IMG-20250705-WA0005.jpg)

### Single number input
![Single number input](./screenshots/IMG-20250705-WA0004.jpg)

### Two & Multiple comma-separated numbers
![Two & Multiple comma-separated numbers](./screenshots/IMG-20250705-WA0003.jpg)

### Newline as delimiter
![Newline as delimiter](./screenshots/IMG-20250705-WA0000.jpg)

### Custom delimiter support
![Custom delimiter support](./screenshots/IMG-20250705-WA0002.jpg)

### Single & Multiple Nagative numbers
![Single & Multiple Nagative numbers](./screenshots/IMG-20250705-WA0006.jpg)

### Unknown amount of number
![Unknown amount of number](./screenshots/IMG-20250705-WA0001.jpg)

### Ignore Number>1000 & Multi-character & delimeter
![Ignore Number>1000 & Multi-character & delimeter](./screenshots/IMG-20250705-WA0007.jpg)

