<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>
    <xsl:template match="/">
        <html>
            <head><title>6 task</title></head>
            <body>
                <xsl:value-of select="//channel/title"/>
                <xsl:for-each select="//channel/item">
                <xsl:variable name='cnt' select='link' />
                <a href='{$cnt}'><h3><xsl:value-of select="title"/></h3></a>
                <p><xsl:value-of select="description"/></p>
                </xsl:for-each> 
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>