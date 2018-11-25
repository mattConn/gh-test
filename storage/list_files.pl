print "<html><body><ul>";
print "<h2>Storage</h2>";
while(<*>)
{
	print "<li><a href=\"./$_\">$_</a></li>"; 
}
print "</ul></body></html>";
