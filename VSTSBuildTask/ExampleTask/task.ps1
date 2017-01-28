﻿#
# ExampleTask.ps1
#
[CmdletBinding(DefaultParameterSetName = 'None')]
param(
	[string][Parameter(Mandatory=$true)] $variable1, 
	[string] $variable2
)

Write-Host "Starting ExampleTask"
Trace-VstsEnteringInvocation $MyInvocation

try {

} catch {

} finally {
	Trace-VstsLeavingInvocation $MyInvocation
}

Write-Host "Ending ExampleTask"