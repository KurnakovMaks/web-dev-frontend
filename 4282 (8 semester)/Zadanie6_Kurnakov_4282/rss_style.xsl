<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html"/>
    <xsl:template match="/">
        <html>
            <head>  </head>
            
            <body>
                <xsl:value-of select="//channel/title"/>
                <xsl:for-each select="//channel/item">
                <xsl:variable name='variable' select='link' />
                    <a href='{$variable}'>
                        <h2>
                            <xsl:value-of select="title"/>
                        </h2>
                    </a>
                <p>
                    <xsl:value-of select="description"/>
                </p>
                </xsl:for-each> 
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>