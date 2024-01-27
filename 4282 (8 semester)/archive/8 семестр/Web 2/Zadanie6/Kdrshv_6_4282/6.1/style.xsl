<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
<xsl:template match="/">
<html>
    <head>
    <title><xsl:value-of select="rss/channel/title"/></title>
    </head>
	<body>
		<h1><xsl:value-of select="rss/channel/title"/></h1>
		<xsl:for-each select="rss/channel/item">
			<h2><xsl:value-of select="title"/></h2>
			<p><xsl:value-of select="description"/></p>
</xsl:for-each>

    </body>
</html>
</xsl:template>
</xsl:stylesheet>