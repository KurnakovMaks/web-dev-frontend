<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html"/>
<xsl:template match="/">
<html>
    <head> </head>
    
    <body>
        <xsl:for-each select="/generals/person">
        <xsl:sort select='votes' order="descending"/>
        <xsl:if test ="(votes &gt;=950000) and (position() &lt;=10)">
            <xsl:variable name='variable' select='url' />
             <a href='{$variable}'>
                    <h2>
                        <xsl:value-of select="name"/>
                    </h2>
            </a>
                    <h2>
                        <xsl:value-of select="votes"/>
                    </h2>
        </xsl:if>
        </xsl:for-each>
</body>
</html>
</xsl:template>
</xsl:stylesheet>