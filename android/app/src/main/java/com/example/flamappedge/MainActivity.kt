
package com.example.flamappedge

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import android.widget.Button
import android.widget.ImageView
import android.graphics.BitmapFactory
import java.io.File

class MainActivity : AppCompatActivity() {

    companion object {
        init {
            System.loadLibrary("native-lib")
        }
    }

    external fun processImagePath(path: String, outPath: String): Int

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Minimal UI: a button to run native processing on a placeholder image
        val btn = Button(this).apply { text = "Process Sample" }
        val iv = ImageView(this)
        setContentView(btn)
        btn.setOnClickListener {
            // This is a stub: in a real app you'd capture camera frames, convert to Mat and call JNI.
            val input = filesDir.absolutePath + "/sample.jpg"
            val out = filesDir.absolutePath + "/out.jpg"
            // processImagePath should read input and output processed image
            try {
                val res = processImagePath(input, out)
            } catch (e: Exception) {
                e.printStackTrace()
            }
        }
    }
}
