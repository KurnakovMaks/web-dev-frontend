<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
<xsl:template match="/">
<html>
<head><title>6 task</title></head>
<body>
    <xsl:for-each select="/generals/person">
        <xsl:sort select='votes' order="descending"/>
        <xsl:if test ="(votes &gt;=950000) and (position() &lt;=10)">
            <xsl:variable name='cnt' select='url' />
            <a href='{$cnt}'><h1><xsl:value-of select="name"/></h1></a>
        <h1><xsl:value-of select="votes"/></h1>
        </xsl:if>
    </xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>