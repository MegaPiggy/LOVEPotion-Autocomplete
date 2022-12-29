export let api = {
    "callbacks": [{
        "description": "If a file called conf.lua is present in your game folder (or .love file), it is run before the LÖVE modules are loaded. You can use this file to overwrite the love.conf function, which is later called by the LÖVE 'boot' script. Using the love.conf function, you can set some configuration options, and change things like the default size of the window, which modules are loaded, and other stuff.",
        "name": "conf",
        "variants": [{
            "arguments": [{
                "description": "The love.conf function takes one argument: a table filled with all the default values which you can overwrite to your liking. If you want to change the default window size, for instance, do:\n\nfunction love.conf(t)\n    t.window.width = 1024\n    t.window.height = 768\nend\n\nIf you don't need the physics module or joystick module, do the following.\n\nfunction love.conf(t)\n    t.modules.joystick = false\n    t.modules.physics = false\nend\n\nSetting unused modules to false is encouraged when you release your game. It reduces startup time slightly (especially if the joystick module is disabled) and reduces memory usage (slightly).\n\nNote that you can't disable love.filesystem; it's mandatory. The same goes for the love module itself. love.graphics needs love.window to be enabled.",
                "name": "t",
                "table": [{
                    "default": "nil",
                    "description": "This flag determines the name of the save directory for your game. Note that you can only specify the name, not the location where it will be created:\nt.identity = \"gabe_HL3\" -- Correct\n\nt.identity = \"c:/Users/gabe/HL3\" -- Incorrect\nAlternatively love.filesystem.setIdentity can be used to set the save directory outside of the config file.",
                    "name": "identity",
                    "type": "string"
                }, {
                    "default": "\"0.10.2\"",
                    "description": "t.version should be a string, representing the version of LÖVE for which your game was made. It should be formatted as \"X.Y.Z\" where X is the major release number, Y the minor, and Z the patch level. It allows LÖVE to display a warning if it isn't compatible. Its default is the version of LÖVE running.",
                    "name": "version",
                    "type": "string"
                }, {
                    "default": "false",
                    "description": "Determines wether a console should be opened alongside the game window (Windows only) or not. Note: On OSX you can get console output by running LÖVE through the terminal.",
                    "name": "console",
                    "type": "boolean"
                }, {
                    "default": "true",
                    "description": "Sets whether the device accelerometer on iOS and Android should be exposed as a 3-axis Joystick. Disabling the accelerometer when it's not used may reduce CPU usage.",
                    "name": "accelerometerjoystick",
                    "type": "boolean"
                }, {
                    "default": "false",
                    "description": "Sets whether files are saved in external storage (true) or internal storage (false) on Android.",
                    "name": "externalstorage",
                    "type": "boolean"
                }, {
                    "default": "false",
                    "description": "Determines whether gamma-correct rendering is enabled, when the system supports it.",
                    "name": "gammacorrect",
                    "type": "boolean"
                }, {
                    "description": "It is possible to defer window creation until love.window.setMode is first called in your code. To do so, set t.window = nil in love.conf (or t.screen = nil in older versions.) If this is done, LÖVE may crash if any function from love.graphics is called before the first love.window.setMode in your code.\n\nThe t.window table was named t.screen in versions prior to 0.9.0. The t.screen table doesn't exist in love.conf in 0.9.0, and the t.window table doesn't exist in love.conf in 0.8.0. This means love.conf will fail to execute (therefore it will fall back to default values) if care is not taken to use the correct table for the LÖVE version being used.",
                    "name": "window",
                    "table": [{
                        "default": "\"Untitled\"",
                        "description": "Sets the title of the window the game is in. Alternatively love.window.setTitle can be used to change the window title outside of the config file.",
                        "name": "title",
                        "type": "string"
                    }, {
                        "default": "nil",
                        "description": "A filepath to an image to use as the window's icon. Not all operating systems support very large icon images. The icon can also be changed with love.window.setIcon.",
                        "name": "icon",
                        "type": "string"
                    }, {
                        "default": "800",
                        "description": "Sets the window's dimensions. If these flags are set to 0 LÖVE automatically uses the user's desktop dimensions.",
                        "name": "width",
                        "type": "number"
                    }, {
                        "default": "600",
                        "description": "Sets the window's dimensions. If these flags are set to 0 LÖVE automatically uses the user's desktop dimensions.",
                        "name": "height",
                        "type": "string"
                    }, {
                        "default": "false",
                        "description": "Removes all border visuals from the window. Note that the effects may wary between operating systems.",
                        "name": "borderless",
                        "type": "boolean"
                    }, {
                        "default": "false",
                        "description": "If set to true this allows the user to resize the game's window.",
                        "name": "resizable",
                        "type": "boolean"
                    }, {
                        "default": "1",
                        "description": "Sets the minimum width and height for the game's window if it can be resized by the user. If you set lower values to window.width and window.height LÖVE will always favor the minimum dimensions set via window.minwidth and window.minheight.",
                        "name": "minwidth",
                        "type": "number"
                    }, {
                        "default": "1",
                        "description": "Sets the minimum width and height for the game's window if it can be resized by the user. If you set lower values to window.width and window.height LÖVE will always favor the minimum dimensions set via window.minwidth and window.minheight.",
                        "name": "minheight",
                        "type": "number"
                    }, {
                        "default": "false",
                        "description": "Wether to run the game in fullscreen (true) or windowed (false) mode. The fullscreen can also be toggled via love.window.setFullscreen or love.window.setMode.",
                        "name": "fullscreen",
                        "type": "boolean"
                    }, {
                        "default": "\"desktop\"",
                        "description": "Specifies the type of fullscreen mode to use (normal or desktop). Generally the desktop is recommended, as it is less restrictive than normal mode on some operating systems.",
                        "name": "fullscreentype",
                        "type": "string"
                    }, {
                        "default": "true",
                        "description": "Enables or deactivates vertical synchronization. Vsync tries to keep the game at a steady framerate and can prevent issues like screen tearing. It is recommended to keep vsync activated if you don't know about the possible implications of turning it off.",
                        "name": "vsync",
                        "type": "boolean"
                    }, {
                        "default": "0",
                        "description": "The number of samples to use with multi-sampled antialiasing.",
                        "name": "msaa",
                        "type": "number"
                    }, {
                        "default": "1",
                        "description": "The index of the display to show the window in, if multiple monitors are available.",
                        "name": "display",
                        "type": "number"
                    }, {
                        "default": "false",
                        "description": "See love.window.getPixelScale, love.window.toPixels, and love.window.fromPixels. It is recommended to keep this option disabled if you can't test your game on a Mac or iOS system with a Retina display, because code will need tweaking to make sure things look correct.",
                        "name": "highdpi",
                        "type": "boolean"
                    }, {
                        "default": "nil",
                        "description": "Determines the position of the window on the user's screen. Alternatively love.window.setPosition can be used to change the position on the fly.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "default": "nil",
                        "description": "Determines the position of the window on the user's screen. Alternatively love.window.setPosition can be used to change the position on the fly.",
                        "name": "y",
                        "type": "number"
                    }],
                    "type": "table"
                }, {
                    "description": "Module options.",
                    "name": "modules",
                    "table": [{
                        "default": "true",
                        "description": "Enable the audio module.",
                        "name": "audio",
                        "type": "boolean"
                    }, {
                        "default": "true",
                        "description": "Enable the event module.",
                        "name": "event",
                        "type": "boolean"
                    }, {
                        "default": "true",
                        "description": "Enable the font module.",
                        "name": "font",
                        "type": "boolean"
                    }, {
                        "default": "true",
                        "description": "Enable the graphics module.",
                        "name": "graphics",
                        "type": "boolean"
                    }, {
                        "default": "true",
                        "description": "Enable the image module.",
                        "name": "image",
                        "type": "boolean"
                    }, {
                        "default": "true",
                        "description": "Enable the joystick module.",
                        "name": "joystick",
                        "type": "boolean"
                    }, {
                        "default": "true",
                        "description": "Enable the keyboard module.",
                        "name": "keyboard",
                        "type": "boolean"
                    }, {
                        "default": "true",
                        "description": "Enable the math module.",
                        "name": "math",
                        "type": "boolean"
                    }, {
                        "default": "true",
                        "description": "Enable the mouse module.",
                        "name": "mouse",
                        "type": "boolean"
                    }, {
                        "default": "true",
                        "description": "Enable the physics module.",
                        "name": "physics",
                        "type": "boolean"
                    }, {
                        "default": "true",
                        "description": "Enable the sound module.",
                        "name": "sound",
                        "type": "boolean"
                    }, {
                        "default": "true",
                        "description": "Enable the system module.",
                        "name": "system",
                        "type": "boolean"
                    }, {
                        "default": "true",
                        "description": "Enable the timer module.",
                        "name": "timer",
                        "type": "boolean"
                    }, {
                        "default": "true",
                        "description": "Enable the touch module.",
                        "name": "touch",
                        "type": "boolean"
                    }, {
                        "default": "true",
                        "description": "Enable the video module.",
                        "name": "video",
                        "type": "boolean"
                    }, {
                        "default": "true",
                        "description": "Enable the window module.",
                        "name": "window",
                        "type": "boolean"
                    }, {
                        "default": "true",
                        "description": "Enable the thread module.",
                        "name": "thread",
                        "type": "boolean"
                    }],
                    "type": "table"
                }],
                "type": "table"
            }]
        }]
    }, {
        "description": "Callback function used to draw on the screen every frame.",
        "name": "draw",
        "variants": [{}, {
            "description": "Nintendo 3DS only. It is set to either \"left\", \"right\", or \"bottom\".",
            "arguments": [{
                "description": "The name of the screen being rendered to.",
                "name": "screen",
                "type": "string"
            }]
        }]
    }, {
        "description": "The error handler, used to display error messages.",
        "name": "errhand",
        "variants": [{
            "arguments": [{
                "description": "The error message.",
                "name": "msg",
                "type": "string"
            }]
        }]
    }, {
        "description": "The error handler, used to display error messages.",
        "name": "errorhandler",
        "variants": [{
            "arguments": [{
                "description": "The error message.",
                "name": "msg",
                "type": "string"
            }]
        }]
    }, {
        "description": "Callback function triggered when window receives or loses focus.",
        "name": "focus",
        "variants": [{
            "arguments": [{
                "description": "True if the window gains focus, false if it loses focus.",
                "name": "focus",
                "type": "boolean"
            }]
        }]
    }, {
        "description": "Called when a Joystick's virtual gamepad axis is moved.",
        "name": "gamepadaxis",
        "variants": [{
            "arguments": [{
                "description": "The joystick object.",
                "name": "joystick",
                "type": "Joystick"
            }, {
                "description": "The virtual gamepad axis.",
                "name": "axis",
                "type": "GamepadAxis"
            }]
        }]
    }, {
        "description": "Called when a Joystick's virtual gamepad button is pressed.",
        "name": "gamepadpressed",
        "variants": [{
            "arguments": [{
                "description": "The joystick object.",
                "name": "joystick",
                "type": "Joystick"
            }, {
                "description": "The virtual gamepad button.",
                "name": "button",
                "type": "GamepadButton"
            }]
        }]
    }, {
        "description": "Called when a Joystick's virtual gamepad button is released.",
        "name": "gamepadreleased",
        "variants": [{
            "arguments": [{
                "description": "The joystick object.",
                "name": "joystick",
                "type": "Joystick"
            }, {
                "description": "The virtual gamepad button.",
                "name": "button",
                "type": "GamepadButton"
            }]
        }]
    }, {
        "description": "This function is called exactly once at the beginning of the game.",
        "name": "load",
        "variants": [{
            "arguments": [{
                "description": "Command line arguments given to the game.",
                "name": "arg",
                "type": "table"
            }]
        }]
    }, {
        "description": "Callback function triggered when the game is closed.",
        "name": "quit",
        "variants": [{
            "returns": [{
                "description": "Abort quitting. If true, do not close the game.",
                "name": "r",
                "type": "boolean"
            }]
        }]
    }, {
        "description": "Called when text has been entered by the user. For example if shift-2 is pressed on an American keyboard layout, the text \"@\" will be generated.",
        "name": "textinput",
        "variants": [{
            "arguments": [{
                "description": "The UTF-8 encoded unicode text.",
                "name": "text",
                "type": "string"
            }]
        }]
    }, {
        "description": "Callback function triggered when a Thread encounters an error.",
        "name": "threaderror",
        "variants": [{
            "arguments": [{
                "description": "The thread which produced the error.",
                "name": "thread",
                "type": "Thread"
            }, {
                "description": "The error message.",
                "name": "errorstr",
                "type": "string"
            }]
        }]
    }, {
        "description": "Callback function triggered when a touch press moves inside the touch screen.",
        "name": "touchmoved",
        "variants": [{
            "arguments": [{
                "description": "The identifier for the touch press.",
                "name": "id",
                "type": "light userdata"
            }, {
                "description": "The x-axis position of the touch inside the window, in pixels.",
                "name": "x",
                "type": "number"
            }, {
                "description": "The y-axis position of the touch inside the window, in pixels.",
                "name": "y",
                "type": "number"
            }, {
                "description": "The x-axis movement of the touch inside the window, in pixels.",
                "name": "dx",
                "type": "number"
            }, {
                "description": "The y-axis movement of the touch inside the window, in pixels.",
                "name": "dy",
                "type": "number"
            }, {
                "description": "The amount of pressure being applied. Most touch screens aren't pressure sensitive, in which case the pressure will be 1.",
                "name": "pressure",
                "type": "number"
            }]
        }]
    }, {
        "description": "Callback function triggered when the touch screen is touched.",
        "name": "touchpressed",
        "variants": [{
            "arguments": [{
                "description": "The identifier for the touch press.",
                "name": "id",
                "type": "light userdata"
            }, {
                "description": "The x-axis position of the touch press inside the window, in pixels.",
                "name": "x",
                "type": "number"
            }, {
                "description": "The y-axis position of the touch press inside the window, in pixels.",
                "name": "y",
                "type": "number"
            }, {
                "description": "The x-axis movement of the touch press inside the window, in pixels. This should always be zero.",
                "name": "dx",
                "type": "number"
            }, {
                "description": "The y-axis movement of the touch press inside the window, in pixels. This should always be zero.",
                "name": "dy",
                "type": "number"
            }, {
                "description": "The amount of pressure being applied. Most touch screens aren't pressure sensitive, in which case the pressure will be 1.",
                "name": "pressure",
                "type": "number"
            }]
        }]
    }, {
        "description": "Callback function triggered when the touch screen stops being touched.",
        "name": "touchreleased",
        "variants": [{
            "arguments": [{
                "description": "The identifier for the touch press.",
                "name": "id",
                "type": "light userdata"
            }, {
                "description": "The x-axis position of the touch inside the window, in pixels.",
                "name": "x",
                "type": "number"
            }, {
                "description": "The y-axis position of the touch inside the window, in pixels.",
                "name": "y",
                "type": "number"
            }, {
                "description": "The x-axis movement of the touch inside the window, in pixels.",
                "name": "dx",
                "type": "number"
            }, {
                "description": "The y-axis movement of the touch inside the window, in pixels.",
                "name": "dy",
                "type": "number"
            }, {
                "description": "The amount of pressure being applied. Most touch screens aren't pressure sensitive, in which case the pressure will be 1.",
                "name": "pressure",
                "type": "number"
            }]
        }]
    }, {
        "description": "Callback function used to update the state of the game every frame.",
        "name": "update",
        "variants": [{
            "arguments": [{
                "description": "Time since the last update in seconds.",
                "name": "dt",
                "type": "number"
            }]
        }]
    }],
    "functions": [{
        "description": "Gets the current running version of LÖVE.",
        "name": "getVersion",
        "variants": [{
            "returns": [{
                "description": "The major version of LÖVE, i.e. 0 for version 0.9.1.",
                "name": "major",
                "type": "number"
            }, {
                "description": "The minor version of LÖVE, i.e. 9 for version 0.9.1.",
                "name": "minor",
                "type": "number"
            }, {
                "description": "The revision version of LÖVE, i.e. 1 for version 0.9.1.",
                "name": "revision",
                "type": "number"
            }, {
                "description": "The codename of the current version, i.e. \"Baby Inspector\" for version 0.9.1.",
                "name": "codename",
                "type": "string"
            }]
        }]
    }],
    "modules": [{
        "description": "Provides an interface to create noise with the user's speakers.",
        "enums": [{
            "constants": [{
                "description": "Sources do not get attenuated.",
                "name": "none"
            }, {
                "description": "Inverse distance attenuation.",
                "name": "inverse"
            }, {
                "description": "Inverse distance attenuation. Gain is clamped. In version 0.9.2 and older this is named inverse clamped.",
                "name": "inverseclamped"
            }, {
                "description": "Linear attenuation.",
                "name": "linear"
            }, {
                "description": "Linear attenuation. Gain is clamped. In version 0.9.2 and older this is named linear clamped.",
                "name": "linearclamped"
            }, {
                "description": "Exponential attenuation.",
                "name": "exponent"
            }, {
                "description": "Exponential attenuation. Gain is clamped. In version 0.9.2 and older this is named exponent clamped.",
                "name": "exponentclamped"
            }],
            "description": "The different distance models.\n\nExtended information can be found in the chapter \"3.4. Attenuation By Distance\" of the OpenAL 1.1 specification.",
            "name": "DistanceModel"
        }, {
            "constants": [{
                "description": "Decode the entire sound at once.",
                "name": "static"
            }, {
                "description": "Stream the sound; decode it gradually.",
                "name": "stream"
            }],
            "description": "Types of audio sources.\n\nA good rule of thumb is to use stream for music files and static for all short sound effects. Basically, you want to avoid loading large files into memory at once.",
            "name": "SourceType"
        }, {
            "constants": [{
                "description": "Regular seconds.",
                "name": "seconds"
            }, {
                "description": "Audio samples.",
                "name": "samples"
            }],
            "description": "Units that represent time.",
            "name": "TimeUnit"
        }],
        "functions": [{
            "description": "Gets the current number of simultaneously playing sources.",
            "name": "getActiveSourceCount",
            "variants": [{
                "returns": [{
                    "description": "The current number of simultaneously playing sources.",
                    "name": "count",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Returns the master volume.",
            "name": "getVolume",
            "variants": [{
                "returns": [{
                    "description": "The current master volume.",
                    "name": "volume",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Creates a new Source from a file or SoundData. Sources created from SoundData are always static.",
            "name": "newSource",
            "variants": [{
                "arguments": [{
                    "description": "The filepath to create a Source from.",
                    "name": "filename",
                    "type": "string"
                }, {
                    "default": "\"stream\"",
                    "description": "Streaming or static source.",
                    "name": "type",
                    "type": "SourceType"
                }],
                "returns": [{
                    "description": "A new Source that can play the specified audio.",
                    "name": "source",
                    "type": "Source"
                }]
            }, {
                "arguments": [{
                    "description": "A File pointing to an audio file.",
                    "name": "file",
                    "type": "File"
                }, {
                    "default": "\"stream\"",
                    "description": "Streaming or static source.",
                    "name": "type",
                    "type": "SourceType"
                }],
                "returns": [{
                    "description": "A new Source that can play the specified audio.",
                    "name": "source",
                    "type": "Source"
                }]
            }, {
                "arguments": [{
                    "description": "The Decoder to create a Source from.",
                    "name": "decoder",
                    "type": "Decoder"
                }, {
                    "default": "\"stream\"",
                    "description": "Streaming or static source.",
                    "name": "type",
                    "type": "SourceType"
                }],
                "returns": [{
                    "description": "A new Source that can play the specified audio.",
                    "name": "source",
                    "type": "Source"
                }]
            }, {
                "arguments": [{
                    "description": "The SoundData to create a Source from.",
                    "name": "soundData",
                    "type": "SoundData"
                }],
                "returns": [{
                    "description": "A new Source that can play the specified audio. The SourceType of the returned audio is \"static\".",
                    "name": "source",
                    "type": "Source"
                }]
            }, {
                "arguments": [{
                    "description": "The FileData to create a Source from.",
                    "name": "fileData",
                    "type": "FileData"
                }],
                "returns": [{
                    "description": "A new Source that can play the specified audio.",
                    "name": "source",
                    "type": "Source"
                }]
            }]
        }, {
            "description": "Pauses currently played Sources.",
            "name": "pause",
            "variants": [{
                "description": "This function will pause all currently active Sources."
            }, {
                "arguments": [{
                    "description": "The source on which to pause the playback.",
                    "name": "source",
                    "type": "Source"
                }],
                "description": "This function will only pause the specified Source."
            }]
        }, {
            "description": "Plays the specified Source.",
            "name": "play",
            "variants": [{
                "arguments": [{
                    "description": "The Source to play.",
                    "name": "source",
                    "type": "Source"
                }]
            }]
        }, {
            "description": "Sets the master volume.",
            "name": "setVolume",
            "variants": [{
                "arguments": [{
                    "description": "1.0f is max and 0.0f is off.",
                    "name": "volume",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Stops currently played sources.",
            "name": "stop",
            "variants": [{
                "description": "This function will stop all currently active sources."
            }, {
                "arguments": [{
                    "description": "The source on which to stop the playback.",
                    "name": "source",
                    "type": "Source"
                }],
                "description": "This function will only stop the specified source."
            }]
        }],
        "name": "audio",
        "types": [{
            "constructors": ["newSource"],
            "description": "A Source represents audio you can play back. You can do interesting things with Sources, like set the volume, pitch, and its position relative to the listener.",
            "functions": [{
                "description": "Creates an identical copy of the Source in the stopped state.\n\nStatic Sources will use significantly less memory and take much less time to be created if Source:clone is used to create them instead of love.audio.newSource, so this method should be preferred when making multiple Sources which play the same sound.\n\nCloned Sources inherit all the set-able state of the original Source, but they are initialized stopped.",
                "name": "clone",
                "variants": [{
                    "returns": [{
                        "description": "The new identical copy of this Source.",
                        "name": "source",
                        "type": "Source"
                    }]
                }]
            }, {
                "description": "Gets the number of channels in the Source. Only 1-channel (mono) Sources can use directional and positional effects.",
                "name": "getChannelCount",
                "variants": [{
                    "returns": [{
                        "description": "1 for mono, 2 for stereo.",
                        "name": "channels",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the duration of the Source. For streaming Sources it may not always be sample-accurate, and may return -1 if the duration cannot be determined at all.",
                "name": "getDuration",
                "variants": [{
                    "arguments": [{
                        "default": "\"seconds\"",
                        "description": "The time unit for the return value.",
                        "name": "unit",
                        "type": "TimeUnit"
                    }],
                    "returns": [{
                        "description": "The duration of the Source, or -1 if it cannot be determined.",
                        "name": "duration",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the number of free buffers on the Source.",
                "name": "getFreeBufferCount",
                "variants": [{
                    "returns": [{
                        "description": "The number of free buffers on the Source.",
                        "name": "count",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the type (static or stream) of the Source.",
                "name": "getType",
                "variants": [{
                    "returns": [{
                        "description": "The type of the source.",
                        "name": "sourcetype",
                        "type": "SourceType"
                    }]
                }]
            }, {
                "description": "Gets the current volume of the Source.",
                "name": "getVolume",
                "variants": [{
                    "returns": [{
                        "description": "The volume of the Source, where 1.0 is normal volume.",
                        "name": "volume",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the volume limits of the source.",
                "name": "getVolumeLimits",
                "variants": [{
                    "returns": [{
                        "description": "The minimum volume.",
                        "name": "min",
                        "type": "number"
                    }, {
                        "description": "The maximum volume.",
                        "name": "max",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns whether the Source will loop.",
                "name": "isLooping",
                "variants": [{
                    "returns": [{
                        "description": "True if the Source will loop, false otherwise.",
                        "name": "loop",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Returns whether the Source is playing.",
                "name": "isPlaying",
                "variants": [{
                    "returns": [{
                        "description": "True if the Source is playing, false otherwise.",
                        "name": "playing",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Pauses the Source.",
                "name": "pause",
                "variants": [[]]
            }, {
                "description": "Starts playing the Source.",
                "name": "play",
                "variants": [{
                    "returns": [{
                        "description": "True if the Source started playing successfully, false otherwise.",
                        "name": "success",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Sets the playing position of the Source.",
                "name": "seek",
                "variants": [{
                    "arguments": [{
                        "description": "The position to seek to.",
                        "name": "position",
                        "type": "number"
                    }, {
                        "default": "\"seconds\"",
                        "description": "The unit of the position value.",
                        "name": "unit",
                        "type": "TimeUnit"
                    }]
                }]
            }, {
                "description": "Sets whether the Source should loop.",
                "name": "setLooping",
                "variants": [{
                    "arguments": [{
                        "description": "True if the source should loop, false otherwise.",
                        "name": "loop",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Sets the volume of the Source.",
                "name": "setVolume",
                "variants": [{
                    "arguments": [{
                        "description": "The volume of the Source, where 1.0 is normal volume.",
                        "name": "volume",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the volume limits of the source. The limits have to be numbers from 0 to 1.",
                "name": "setVolumeLimits",
                "variants": [{
                    "arguments": [{
                        "description": "The minimum volume.",
                        "name": "min",
                        "type": "number"
                    }, {
                        "description": "The maximum volume.",
                        "name": "max",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Stops a Source.",
                "name": "stop",
                "variants": [[]]
            }, {
                "description": "Gets the currently playing position of the Source.",
                "name": "tell",
                "variants": [{
                    "arguments": [{
                        "default": "\"seconds\"",
                        "description": "The type of unit for the return value.",
                        "name": "unit",
                        "type": "TimeUnit"
                    }],
                    "returns": [{
                        "description": "The currently playing position of the Source.",
                        "name": "position",
                        "type": "number"
                    }]
                }]
            }],
            "name": "Source",
            "supertypes": ["Object"]
        }]
    }, {
        "description": "Manages events, like keypresses.",
        "enums": [{
            "constants": [{
                "description": "Window focus gained or lost",
                "name": "focus"
            }, {
                "description": "Joystick axis motion",
                "name": "joystickaxis"
            }, {
                "description": "Joystick hat pressed",
                "name": "joystickhat"
            }, {
                "description": "Joystick pressed",
                "name": "joystickpressed"
            }, {
                "description": "Joystick released",
                "name": "joystickreleased"
            }, {
                "description": "Key pressed",
                "name": "keypressed"
            }, {
                "description": "Key released",
                "name": "keyreleased"
            }, {
                "description": "Window mouse focus gained or lost",
                "name": "mousefocus"
            }, {
                "description": "Mouse pressed",
                "name": "mousepressed"
            }, {
                "description": "Mouse released",
                "name": "mousereleased"
            }, {
                "description": "Window size changed by the user",
                "name": "resize"
            }, {
                "description": "A Lua error has occurred in a thread.",
                "name": "threaderror"
            }, {
                "description": "Quit",
                "name": "quit"
            }, {
                "description": "Window is minimized or un-minimized by the user",
                "name": "visible"
            }],
            "description": "Arguments to love.event.push() and the like.",
            "name": "Event"
        }],
        "functions": [{
            "description": "Clears the event queue.",
            "name": "clear",
            "variants": [[]]
        }, {
            "description": "Returns an iterator for messages in the event queue.",
            "name": "poll",
            "variants": [{
                "returns": [{
                    "description": "Iterator function usable in a for loop.",
                    "name": "i",
                    "type": "function"
                }]
            }]
        }, {
            "description": "Pump events into the event queue. This is a low-level function, and is usually not called by the user, but by love.run. Note that this does need to be called for any OS to think you're still running, and if you want to handle OS-generated events at all (think callbacks). love.event.pump can only be called from the main thread, but afterwards, the rest of love.event can be used from any other thread.",
            "name": "pump",
            "variants": [[]]
        }, {
            "description": "Adds an event to the event queue.",
            "name": "push",
            "variants": [{
                "arguments": [{
                    "description": "The name of the event.",
                    "name": "e",
                    "type": "Event"
                }, {
                    "default": "nil",
                    "description": "First event argument.",
                    "name": "a",
                    "type": "mixed"
                }, {
                    "default": "nil",
                    "description": "Second event argument.",
                    "name": "b",
                    "type": "mixed"
                }, {
                    "default": "nil",
                    "description": "Third event argument.",
                    "name": "c",
                    "type": "mixed"
                }, {
                    "default": "nil",
                    "description": "Fourth event argument.",
                    "name": "d",
                    "type": "mixed"
                }]
            }]
        }, {
            "description": "Adds the quit event to the queue.\n\nThe quit event is a signal for the event handler to close LÖVE. It's possible to abort the exit process with the love.quit callback.",
            "name": "quit",
            "variants": [[], {
                "arguments": [{
                    "default": "0",
                    "description": "The program exit status to use when closing the application.",
                    "name": "exitstatus",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "Restarts the game without relaunching the executable. This cleanly shuts down the main Lua state instance and creates a brand new one.",
                    "name": "\"restart\"",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Like love.event.poll but blocks until there is an event in the queue.",
            "name": "wait",
            "variants": [{
                "returns": [{
                    "description": "The type of event.",
                    "name": "e",
                    "type": "Event"
                }, {
                    "description": "First event argument.",
                    "name": "a",
                    "type": "mixed"
                }, {
                    "description": "Second event argument.",
                    "name": "b",
                    "type": "mixed"
                }, {
                    "description": "Third event argument.",
                    "name": "c",
                    "type": "mixed"
                }, {
                    "description": "Fourth event argument.",
                    "name": "d",
                    "type": "mixed"
                }]
            }]
        }],
        "name": "event"
    }, {
        "description": "Provides an interface to the user's filesystem.",
        "enums": [{
            "constants": [{
                "description": "No buffering. The result of write and append operations appears immediately.",
                "name": "none"
            }, {
                "description": "Line buffering. Write and append operations are buffered until a newline is output or the buffer size limit is reached.",
                "name": "line"
            }, {
                "description": "Full buffering. Write and append operations are always buffered until the buffer size limit is reached.",
                "name": "full"
            }],
            "description": "Buffer modes for File objects.",
            "name": "BufferMode"
        }, {
            "constants": [{
                "description": "The data is unencoded.",
                "name": "file"
            }, {
                "description": "The data is base64-encoded.",
                "name": "base64"
            }],
            "description": "How to decode a given FileData.",
            "name": "FileDecoder"
        }, {
            "constants": [{
                "description": "Open a file for read.",
                "name": "r"
            }, {
                "description": "Open a file for write.",
                "name": "w"
            }, {
                "description": "Open a file for append.",
                "name": "a"
            }, {
                "description": "Do not open a file (represents a closed file.)",
                "name": "c"
            }],
            "description": "The different modes you can open a file in.",
            "name": "FileMode"
        }],
        "functions": [{
            "description": "Append data to an existing file.",
            "name": "append",
            "variants": [{
                "arguments": [{
                    "description": "The name (and path) of the file.",
                    "name": "name",
                    "type": "string"
                }, {
                    "description": "The data that should be written to the file",
                    "name": "data",
                    "type": "string"
                }, {
                    "default": "all",
                    "description": "How many bytes to write.",
                    "name": "size",
                    "type": "number"
                }],
                "returns": [{
                    "description": "True if the operation was successful, or nil if there was an error.",
                    "name": "success",
                    "type": "boolean"
                }, {
                    "description": "The error message on failure.",
                    "name": "errormsg",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Creates a directory.",
            "name": "createDirectory",
            "variants": [{
                "arguments": [{
                    "description": "The directory to create.",
                    "name": "name",
                    "type": "string"
                }],
                "returns": [{
                    "description": "True if the directory was created, false if not.",
                    "name": "success",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Returns a table with the names of files and subdirectories in the specified path. The table is not sorted in any way; the order is undefined.\n\nIf the path passed to the function exists in the game and the save directory, it will list the files and directories from both places.",
            "name": "getDirectoryItems",
            "variants": [{
                "arguments": [{
                    "description": "The directory.",
                    "name": "dir",
                    "type": "string"
                }],
                "returns": [{
                    "description": "A sequence with the names of all files and subdirectories as strings.",
                    "name": "items",
                    "type": "table"
                }]
            }]
        }, {
            "description": "Gets the write directory name for your game. Note that this only returns the name of the folder to store your files in, not the full location.",
            "name": "getIdentity",
            "variants": [{
                "arguments": [{
                    "description": "The identity that is used as write directory.",
                    "name": "name",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Gets the platform-specific absolute path of the directory containing a filepath.\n\nThis can be used to determine whether a file is inside the save directory or the game's source .love.",
            "name": "getRealDirectory",
            "variants": [{
                "arguments": [{
                    "description": "The filepath to get the directory of.",
                    "name": "filepath",
                    "type": "string"
                }],
                "returns": [{
                    "description": "The platform-specific full path of the directory containing the filepath.",
                    "name": "realdir",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Gets the filesystem paths that will be searched when require is called.\n\nThe paths string returned by this function is a sequence of path templates separated by semicolons. The argument passed to require will be inserted in place of any question mark (\"?\") character in each template (after the dot characters in the argument passed to require are replaced by directory separators.)\n\nThe paths are relative to the game's source and save directories, as well as any paths mounted with love.filesystem.mount.",
            "name": "getRequirePath",
            "variants": [{
                "returns": [{
                    "description": "The paths that the require function will check in love's filesystem.",
                    "name": "paths",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Gets the full path to the designated save directory. This can be useful if you want to use the standard io library (or something else) to read or write in the save directory.",
            "name": "getSaveDirectory",
            "variants": [{
                "returns": [{
                    "description": "The absolute path to the save directory.",
                    "name": "path",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Returns the full path to the the .love file or directory. If the game is fused to the LÖVE executable, then the executable is returned.",
            "name": "getSource",
            "variants": [{
                "returns": [{
                    "description": "The full platform-dependent path of the .love file or directory.",
                    "name": "path",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Returns the full path to the directory containing the .love file. If the game is fused to the LÖVE executable, then the directory containing the executable is returned.\n\nIf love.filesystem.isFused is true, the path returned by this function can be passed to love.filesystem.mount, which will make the directory containing the main game readable by love.filesystem.",
            "name": "getSourceBaseDirectory",
            "variants": [{
                "returns": [{
                    "description": "The full platform-dependent path of the directory containing the .love file.",
                    "name": "path",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Returns the path of the user's directory.",
            "name": "getUserDirectory",
            "variants": [{
                "returns": [{
                    "description": "The path of the user's directory.",
                    "name": "path",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Gets the current working directory.",
            "name": "getWorkingDirectory",
            "variants": [{
                "returns": [{
                    "description": "The current working directory.",
                    "name": "path",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Initializes love.filesystem, will be called internally, so should not be used explicitly.",
            "name": "init",
            "variants": [{
                "arguments": [{
                    "description": "The name of the application binary, typically love.",
                    "name": "appname",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Gets whether the game is in fused mode or not.\n\nIf a game is in fused mode, its save directory will be directly in the Appdata directory instead of Appdata/LOVE/. The game will also be able to load C Lua dynamic libraries which are located in the save directory.\n\nA game is in fused mode if the source .love has been fused to the executable (see Game Distribution), or if \"--fused\" has been given as a command-line argument when starting the game.",
            "name": "isFused",
            "variants": [{
                "returns": [{
                    "description": "True if the game is in fused mode, false otherwise.",
                    "name": "fused",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Iterate over the lines in a file.",
            "name": "lines",
            "variants": [{
                "arguments": [{
                    "description": "The name (and path) of the file.",
                    "name": "name",
                    "type": "string"
                }],
                "returns": [{
                    "description": "A function that iterates over all the lines in the file.",
                    "name": "iterator",
                    "type": "function"
                }]
            }]
        }, {
            "description": "Loads a Lua file (but does not run it).",
            "name": "load",
            "variants": [{
                "arguments": [{
                    "description": "The name (and path) of the file.",
                    "name": "name",
                    "type": "string"
                }, {
                    "default": "nil",
                    "description": "The error message if file could not be opened.",
                    "name": "errormsg",
                    "type": "string"
                }],
                "returns": [{
                    "description": "The loaded chunk.",
                    "name": "chunk",
                    "type": "function"
                }]
            }]
        }, {
            "description": "Mounts a zip file or folder in the game's save directory for reading.",
            "name": "mount",
            "variants": [{
                "arguments": [{
                    "description": "The folder or zip file in the game's save directory to mount.",
                    "name": "archive",
                    "type": "string"
                }, {
                    "description": "The new path the archive will be mounted to.",
                    "name": "mountpoint",
                    "type": "string"
                }],
                "returns": [{
                    "description": "True if the archive was successfully mounted, false otherwise.",
                    "name": "success",
                    "type": "boolean"
                }]
            }, {
                "arguments": [{
                    "description": "The folder or zip file in the game's save directory to mount.",
                    "name": "archive",
                    "type": "string"
                }, {
                    "description": "The new path the archive will be mounted to.",
                    "name": "mountpoint",
                    "type": "string"
                }, {
                    "default": "false",
                    "description": "Whether the archive will be searched when reading a filepath before or after already-mounted archives. This includes the game's source and save directories.",
                    "name": "appendToPath",
                    "type": "string"
                }],
                "returns": [{
                    "description": "True if the archive was successfully mounted, false otherwise.",
                    "name": "success",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Creates a new File object. It needs to be opened before it can be accessed.",
            "name": "newFile",
            "variants": [{
                "arguments": [{
                    "description": "The filename of the file to read.",
                    "name": "filename",
                    "type": "string"
                }, {
                    "default": "\"c\"",
                    "description": "The mode to open the file in.",
                    "name": "mode",
                    "type": "FileMode"
                }],
                "returns": [{
                    "description": "The new File object, or nil if an error occurred.",
                    "name": "file",
                    "type": "File"
                }, {
                    "description": "The error string if an error occurred.",
                    "name": "errorstr",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Creates a new FileData object.",
            "name": "newFileData",
            "variants": [{
                "arguments": [{
                    "description": "The contents of the file.",
                    "name": "contents",
                    "type": "string"
                }, {
                    "description": "The name of the file.",
                    "name": "name",
                    "type": "string"
                }, {
                    "default": "\"file\"",
                    "description": "The method to use when decoding the contents.",
                    "name": "decoder",
                    "type": "FileDecoder"
                }],
                "returns": [{
                    "description": "Your new FileData.",
                    "name": "data",
                    "type": "FileData"
                }]
            }, {
                "arguments": [{
                    "description": "Path to the file.",
                    "name": "filepath",
                    "type": "string"
                }],
                "description": "Creates a new FileData from a file on the storage device.",
                "returns": [{
                    "description": "The new FileData, or nil if an error occurred.",
                    "name": "data",
                    "type": "FileData"
                }, {
                    "description": "The error string, if an error occurred.",
                    "name": "err",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Read the contents of a file.",
            "name": "read",
            "variants": [{
                "arguments": [{
                    "description": "The name (and path) of the file.",
                    "name": "name",
                    "type": "string"
                }, {
                    "default": "all",
                    "description": "How many bytes to read.",
                    "name": "bytes",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The file contents.",
                    "name": "contents",
                    "type": "string"
                }, {
                    "description": "How many bytes have been read.",
                    "name": "size",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Removes a file or directory.",
            "name": "remove",
            "variants": [{
                "arguments": [{
                    "description": "The file or directory to remove.",
                    "name": "name",
                    "type": "string"
                }],
                "returns": [{
                    "description": "True if the file/directory was removed, false otherwise.",
                    "name": "success",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Sets the write directory for your game. Note that you can only set the name of the folder to store your files in, not the location.",
            "name": "setIdentity",
            "variants": [{
                "arguments": [{
                    "description": "The new identity that will be used as write directory.",
                    "name": "name",
                    "type": "string"
                }, {
                    "default": "false",
                    "description": "Whether the identity directory will be searched when reading a filepath before or after the game's source directory and any currently mounted archives.",
                    "name": "appendToPath",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Sets the filesystem paths that will be searched when require is called.\n\nThe paths string given to this function is a sequence of path templates separated by semicolons. The argument passed to require will be inserted in place of any question mark (\"?\") character in each template (after the dot characters in the argument passed to require are replaced by directory separators.)\n\nThe paths are relative to the game's source and save directories, as well as any paths mounted with love.filesystem.mount.",
            "name": "setRequirePath",
            "variants": [{
                "arguments": [{
                    "description": "The paths that the require function will check in love's filesystem.",
                    "name": "paths",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Sets the source of the game, where the code is present. This function can only be called once, and is normally automatically done by LÖVE.",
            "name": "setSource",
            "variants": [{
                "arguments": [{
                    "description": "Absolute path to the game's source folder.",
                    "name": "path",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Unmounts a zip file or folder previously mounted for reading with love.filesystem.mount.",
            "name": "unmount",
            "variants": [{
                "arguments": [{
                    "description": "The folder or zip file in the game's save directory which is currently mounted.",
                    "name": "archive",
                    "type": "string"
                }],
                "returns": [{
                    "description": "True if the archive was successfully unmounted, false otherwise.",
                    "name": "success",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Write data to a file.\n\nIf you are getting the error message \"Could not set write directory\", try setting the save directory. This is done either with love.filesystem.setIdentity or by setting the identity field in love.conf.",
            "name": "write",
            "variants": [{
                "arguments": [{
                    "description": "The name (and path) of the file.",
                    "name": "name",
                    "type": "string"
                }, {
                    "description": "The data that should be written to the file",
                    "name": "data",
                    "type": "string"
                }, {
                    "default": "all",
                    "description": "How many bytes to write.",
                    "name": "size",
                    "type": "number"
                }],
                "returns": [{
                    "description": "If the operation was successful",
                    "name": "success",
                    "type": "boolean"
                }]
            }]
        }],
        "name": "filesystem",
        "types": [{
            "constructors": ["newFile"],
            "description": "Represents a file on the filesystem.",
            "functions": [{
                "description": "Closes a file.",
                "name": "close",
                "variants": [{
                    "returns": [{
                        "description": "Whether closing was successful.",
                        "name": "success",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Flushes any buffered written data in the file to the disk.",
                "name": "flush",
                "variants": [{
                    "returns": [{
                        "description": "Whether the file successfully flushed any buffered data to the disk.",
                        "name": "success",
                        "type": "boolean"
                    }, {
                        "description": "The error string, if an error occurred and the file could not be flushed.",
                        "name": "err",
                        "type": "string"
                    }]
                }]
            }, {
                "description": "Gets the buffer mode of a file.",
                "name": "getBuffer",
                "variants": [{
                    "returns": [{
                        "description": "The current buffer mode of the file.",
                        "name": "mode",
                        "type": "BufferMode"
                    }, {
                        "description": "The maximum size in bytes of the file's buffer.",
                        "name": "size",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the filename that the File object was created with. If the file object originated from the love.filedropped callback, the filename will be the full platform-dependent file path.",
                "name": "getFilename",
                "variants": [{
                    "returns": [{
                        "description": "The filename of the File.",
                        "name": "filename",
                        "type": "string"
                    }]
                }]
            }, {
                "description": "Gets the FileMode the file has been opened with.",
                "name": "getMode",
                "variants": [{
                    "returns": [{
                        "description": "The mode this file has been opened with.",
                        "name": "mode",
                        "type": "FileMode"
                    }]
                }]
            }, {
                "description": "Returns the file size.",
                "name": "getSize",
                "variants": [{
                    "returns": [{
                        "description": "The file size",
                        "name": "size",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets whether end-of-file has been reached.",
                "name": "isEOF",
                "variants": [{
                    "returns": [{
                        "description": "Whether EOF has been reached.",
                        "name": "eof",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Gets whether the file is open.",
                "name": "isOpen",
                "variants": [{
                    "returns": [{
                        "description": "True if the file is currently open, false otherwise.",
                        "name": "open",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Iterate over all the lines in a file",
                "name": "lines",
                "variants": [{
                    "returns": [{
                        "description": "The iterator (can be used in for loops)",
                        "name": "iterator",
                        "type": "function"
                    }]
                }]
            }, {
                "description": "Open the file for write, read or append.\n\nIf you are getting the error message \"Could not set write directory\", try setting the save directory. This is done either with love.filesystem.setIdentity or by setting the identity field in love.conf.",
                "name": "open",
                "variants": [{
                    "arguments": [{
                        "description": "The mode to open the file in.",
                        "name": "mode",
                        "type": "FileMode"
                    }],
                    "returns": [{
                        "description": "True on success, false otherwise.",
                        "name": "success",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Read a number of bytes from a file.",
                "name": "read",
                "variants": [{
                    "arguments": [{
                        "default": "all",
                        "description": "The number of bytes to read",
                        "name": "bytes",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The contents of the read bytes.",
                        "name": "contents",
                        "type": "string"
                    }, {
                        "description": "How many bytes have been read.",
                        "name": "size",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Seek to a position in a file.",
                "name": "seek",
                "variants": [{
                    "arguments": [{
                        "description": "The position to seek to.",
                        "name": "position",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "Whether the operation was successful.",
                        "name": "success",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Sets the buffer mode for a file opened for writing or appending. Files with buffering enabled will not write data to the disk until the buffer size limit is reached, depending on the buffer mode.",
                "name": "setBuffer",
                "variants": [{
                    "arguments": [{
                        "description": "The buffer mode to use.",
                        "name": "mode",
                        "type": "BufferMode"
                    }, {
                        "description": "The maximum size in bytes of the file's buffer.",
                        "name": "size",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "Whether the buffer mode was successfully set.",
                        "name": "success",
                        "type": "boolean"
                    }, {
                        "description": "The error string, if the buffer mode could not be set and an error occurred.",
                        "name": "errorstr",
                        "type": "string"
                    }]
                }]
            }, {
                "description": "Returns the position in the file.",
                "name": "tell",
                "variants": [{
                    "returns": [{
                        "description": "The position in the file.",
                        "name": "position",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Write data to a file.",
                "name": "write",
                "variants": [{
                    "arguments": [{
                        "description": "The data to write.",
                        "name": "data",
                        "type": "string"
                    }, {
                        "default": "all",
                        "description": "How many bytes to write.",
                        "name": "size",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "Whether the operation was successful.",
                        "name": "success",
                        "type": "boolean"
                    }]
                }]
            }],
            "name": "File",
            "supertypes": ["Object"]
        }, {
            "constructors": ["newFileData"],
            "description": "Data representing the contents of a file.",
            "functions": [{
                "description": "Creates a new copy of the Data object.",
                "name": "clone",
                "variants": [{
                    "returns": [{
                        "description": "A new copy of the Data object.",
                        "name": "copy",
                        "type": "FileData"
                    }]
                }]
            }, {
                "description": "Gets the extension of the FileData.",
                "name": "getExtension",
                "variants": [{
                    "returns": [{
                        "description": "The extension of the file the FileData represents.",
                        "name": "ext",
                        "type": "string"
                    }]
                }]
            }, {
                "description": "Gets the filename of the FileData.",
                "name": "getFilename",
                "variants": [{
                    "returns": [{
                        "description": "The name of the file the FileData represents.",
                        "name": "name",
                        "type": "string"
                    }]
                }]
            }],
            "name": "FileData",
            "supertypes": ["Data", "Object"]
        }]
    }, {
        "description": "Allows you to work with fonts.",
        "enums": [{
            "constants": [{
                "description": "Default hinting. Should be preferred for typical antialiased fonts.",
                "name": "normal"
            }, {
                "description": "Results in fuzzier text but can sometimes preserve the original glyph shapes of the text better than normal hinting.",
                "name": "light"
            }, {
                "description": "Results in aliased / unsmoothed text with either full opacity or completely transparent pixels. Should be used when antialiasing is not desired for the font.",
                "name": "mono"
            }, {
                "description": "Disables hinting for the font. Results in fuzzier text.",
                "name": "none"
            }],
            "description": "True Type hinting mode.",
            "name": "HintingMode"
        }],
        "functions": [{
            "description": "Creates a new Rasterizer.",
            "name": "newRasterizer",
            "variants": [{
                "arguments": [{
                    "description": "Path to font file.",
                    "name": "fileName",
                    "type": "string"
                }],
                "returns": [{
                    "description": "The rasterizer.",
                    "name": "rasterizer",
                    "type": "Rasterizer"
                }]
            }, {
                "arguments": [{
                    "description": "File data containing font.",
                    "name": "fileData",
                    "type": "FileData"
                }],
                "returns": [{
                    "description": "The rasterizer.",
                    "name": "rasterizer",
                    "type": "Rasterizer"
                }]
            }, {
                "arguments": [{
                    "description": "The font size.",
                    "name": "size",
                    "type": "number"
                }, {
                    "default": "normal",
                    "description": "True Type hinting mode.",
                    "name": "hinting",
                    "type": "HintingMode"
                }, {
                    "default": "2",
                    "description": "The font DPI scale.",
                    "name": "dpiscale",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The rasterizer.",
                    "name": "rasterizer",
                    "type": "Rasterizer"
                }]
            }, {
                "arguments": [{
                    "description": "Path to font file.",
                    "name": "fileName",
                    "type": "string"
                }, {
                    "description": "The font size.",
                    "name": "size",
                    "type": "number"
                }, {
                    "default": "normal",
                    "description": "True Type hinting mode.",
                    "name": "hinting",
                    "type": "HintingMode"
                }, {
                    "default": "2",
                    "description": "The font DPI scale.",
                    "name": "dpiscale",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The rasterizer.",
                    "name": "rasterizer",
                    "type": "Rasterizer"
                }]
            }, {
                "arguments": [{
                    "description": "File data containing font.",
                    "name": "fileData",
                    "type": "FileData"
                }, {
                    "default": "12",
                    "description": "The font size.",
                    "name": "size",
                    "type": "number"
                }, {
                    "default": "normal",
                    "description": "True Type hinting mode.",
                    "name": "hinting",
                    "type": "HintingMode"
                }, {
                    "default": "2",
                    "description": "The font DPI scale.",
                    "name": "dpiscale",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The rasterizer.",
                    "name": "rasterizer",
                    "type": "Rasterizer"
                }]
            }]
        }, {
            "description": "Creates a new TrueType Rasterizer. Nintendo Switch only",
            "name": "newTrueTypeRasterizer",
            "variants": [{
                "arguments": [{
                    "default": "12",
                    "description": "The font size.",
                    "name": "size",
                    "type": "number"
                }, {
                    "default": "normal",
                    "description": "True Type hinting mode.",
                    "name": "hinting",
                    "type": "HintingMode"
                }, {
                    "default": "2",
                    "description": "The font DPI scale.",
                    "name": "dpiscale",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The rasterizer.",
                    "name": "rasterizer",
                    "type": "Rasterizer"
                }]
            }, {
                "arguments": [{
                    "description": "Path to font file.",
                    "name": "fileName",
                    "type": "string"
                }, {
                    "default": "12",
                    "description": "The font size.",
                    "name": "size",
                    "type": "number"
                }, {
                    "default": "normal",
                    "description": "True Type hinting mode.",
                    "name": "hinting",
                    "type": "HintingMode"
                }, {
                    "default": "2",
                    "description": "The font DPI scale.",
                    "name": "dpiscale",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The rasterizer.",
                    "name": "rasterizer",
                    "type": "Rasterizer"
                }]
            }, {
                "arguments": [{
                    "description": "File data containing font.",
                    "name": "fileData",
                    "type": "FileData"
                }, {
                    "default": "12",
                    "description": "The font size.",
                    "name": "size",
                    "type": "number"
                }, {
                    "default": "normal",
                    "description": "True Type hinting mode.",
                    "name": "hinting",
                    "type": "HintingMode"
                }, {
                    "default": "2",
                    "description": "The font DPI scale.",
                    "name": "dpiscale",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The rasterizer.",
                    "name": "rasterizer",
                    "type": "Rasterizer"
                }]
            }]
        }, {
            "description": "Creates a bew BCFNT Rasterizer. Nintendo 3DS only",
            "name": "newBCFNTRasterizer",
            "variants": [{
                "arguments": [{
                    "default": "12",
                    "description": "The font size.",
                    "name": "size",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The rasterizer.",
                    "name": "rasterizer",
                    "type": "Rasterizer"
                }]
            }, {
                "arguments": [{
                    "description": "Path to font file.",
                    "name": "fileName",
                    "type": "string"
                }, {
                    "default": "12",
                    "description": "The font size.",
                    "name": "size",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The rasterizer.",
                    "name": "rasterizer",
                    "type": "Rasterizer"
                }]
            }, {
                "arguments": [{
                    "description": "File data containing font.",
                    "name": "fileData",
                    "type": "FileData"
                }, {
                    "default": "12",
                    "description": "The font size.",
                    "name": "size",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The rasterizer.",
                    "name": "rasterizer",
                    "type": "Rasterizer"
                }]
            }]
        }, {
            "description": "Creates a new GlyphData.",
            "name": "newGlyphData",
            "variants": [{
                "arguments": [{
                    "description": "The rasterizer.",
                    "name": "rasterizer",
                    "type": "Rasterizer"
                }, {
                    "description": "The character code of the glyph.",
                    "name": "glyph",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The GlyphData.",
                    "name": "glyphData",
                    "type": "GlyphData"
                }]
            }]
        }],
        "name": "font",
        "types": [{
            "constructors": ["newRasterizer", "newTrueTypeRasterizer", "newBCFNTRasterizer"],
            "description": "A Rasterizer handles font rendering, containing the font data (image or TrueType font) and drawable glyphs.",
            "functions": [{
                "description": "Gets font advance.",
                "name": "getAdvance",
                "variants": [{
                    "returns": [{
                        "description": "Font advance.",
                        "name": "advance",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets ascent height.",
                "name": "getAscent",
                "variants": [{
                    "returns": [{
                        "description": "Ascent height.",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets descent height.",
                "name": "getDescent",
                "variants": [{
                    "returns": [{
                        "description": "Descent height.",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets number of glyphs in font.",
                "name": "getGlyphCount",
                "variants": [{
                    "returns": [{
                        "description": "Glyphs count.",
                        "name": "count",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets glyph data of a specified glyph.",
                "name": "getGlyphData",
                "variants": [{
                    "arguments": [{
                        "description": "Glyph",
                        "name": "glyph",
                        "type": "string"
                    }],
                    "returns": [{
                        "description": "Glyph data",
                        "name": "glyphData",
                        "type": "GlyphData"
                    }]
                }, {
                    "arguments": [{
                        "description": "Glyph number",
                        "name": "glyphNumber",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "Glyph data",
                        "name": "glyphData",
                        "type": "GlyphData"
                    }]
                }, {
                    "description": "Gets font height.",
                    "name": "getHeight",
                    "variants": [{
                        "returns": [{
                            "description": "Font height.",
                            "name": "height",
                            "type": "number"
                        }]
                    }]
                }, {
                    "description": "Gets line height of a font.",
                    "name": "getLineHeight",
                    "variants": [{
                        "returns": [{
                            "description": "Line height of a font.",
                            "name": "height",
                            "type": "number"
                        }]
                    }]
                }, {
                    "description": "Checks if font contains specified glyphs.",
                    "name": "hasGlyphs",
                    "variants": [{
                        "arguments": [{
                            "description": "Glyph",
                            "name": "glyph1",
                            "type": "string"
                        }, {
                            "description": "Glyph",
                            "name": "glyph2",
                            "type": "string"
                        }, {
                            "description": "Additional glyphs",
                            "name": "...",
                            "type": "string"
                        }],
                        "returns": [{
                            "description": "Whatever font contains specified glyphs.",
                            "name": "hasGlyphs",
                            "type": "boolean"
                        }]
                    }, {
                        "arguments": [{
                            "description": "Glyph",
                            "name": "glyph1",
                            "type": "number"
                        }, {
                            "description": "Glyph",
                            "name": "glyph2",
                            "type": "number"
                        }, {
                            "description": "Additional glyphs",
                            "name": "...",
                            "type": "number"
                        }],
                        "returns": [{
                            "description": "Whatever font contains specified glyphs.",
                            "name": "hasGlyphs",
                            "type": "boolean"
                        }]
                    }]
                }]
            }],
            "name": "Rasterizer",
            "supertypes": ["Object"]
        }, {
            "constructors": ["newGlyphData"],
            "description": "A GlyphData represents a drawable symbol of a font Rasterizer.",
            "functions": [{
                "description": "Gets glyph data of a specified glyph.",
                "name": "getGlyphData",
                "variants": [{
                    "description": "Gets glyph advance.",
                    "name": "getAdvance",
                    "variants": [{
                        "returns": [{
                            "description": "Glyph advance.",
                            "name": "advance",
                            "type": "number"
                        }]
                    }]
                }, {
                    "description": "Gets glyph bearing.",
                    "name": "getBearing",
                    "variants": [{
                        "returns": [{
                            "description": "Glyph bearing x.",
                            "name": "bx",
                            "type": "number"
                        }, {
                            "description": "Glyph bearing y.",
                            "name": "by",
                            "type": "number"
                        }]
                    }]
                }, {
                    "description": "Gets glyph bounding box.",
                    "name": "getBoundingBox",
                    "variants": [{
                        "returns": [{
                            "description": "Glyph position x.",
                            "name": "x",
                            "type": "number"
                        }, {
                            "description": "Glyph position y.",
                            "name": "y",
                            "type": "number"
                        }, {
                            "description": "Glyph width.",
                            "name": "width",
                            "type": "number"
                        }, {
                            "description": "Glyph height.",
                            "name": "height",
                            "type": "number"
                        }]
                    }]
                }, {
                    "description": "Gets glyph dimensions.",
                    "name": "getDimensions",
                    "variants": [{
                        "returns": [{
                            "description": "Glyph width.",
                            "name": "width",
                            "type": "number"
                        }, {
                            "description": "Glyph height.",
                            "name": "height",
                            "type": "number"
                        }]
                    }]
                }, {
                    "description": "Gets glyph pixel format.",
                    "name": "getFormat",
                    "variants": [{
                        "returns": [{
                            "description": "Glyph pixel format.",
                            "name": "format",
                            "type": "string"
                        }]
                    }]
                }, {
                    "description": "Gets glyph number.",
                    "name": "getGlyph",
                    "variants": [{
                        "returns": [{
                            "description": "Glyph number.",
                            "name": "glyph",
                            "type": "number"
                        }]
                    }]
                }, {
                    "description": "Gets glyph string.",
                    "name": "getGlyphString",
                    "variants": [{
                        "returns": [{
                            "description": "Glyph string.",
                            "name": "glyph",
                            "type": "string"
                        }]
                    }]
                }, {
                    "description": "Gets glyph height.",
                    "name": "getHeight",
                    "variants": [{
                        "returns": [{
                            "description": "Glyph height.",
                            "name": "height",
                            "type": "number"
                        }]
                    }]
                }, {
                    "description": "Gets glyph width.",
                    "name": "getWidth",
                    "variants": [{
                        "returns": [{
                            "description": "Glyph width.",
                            "name": "width",
                            "type": "number"
                        }]
                    }]
                }]
            }],
            "name": "GlyphData",
            "supertypes": ["Data", "Object"]
        }]
    }, {
        "description": "The primary responsibility for the love.graphics module is the drawing of lines, shapes, text, Images and other Drawable objects onto the screen. Its secondary responsibilities include loading external files (including Images and Fonts) into memory, creating specialized objects (such as ParticleSystems or Framebuffers) and managing screen geometry.\n\nLÖVE's coordinate system is rooted in the upper-left corner of the screen, which is at location (0, 0). The x-axis is horizontal: larger values are further to the right. The y-axis is vertical: larger values are further towards the bottom.\n\nIn many cases, you draw images or shapes in terms of their upper-left corner (See the picture above).\n\nMany of the functions are used to manipulate the graphics coordinate system, which is essentially the way coordinates are mapped to the display. You can change the position, scale, and even rotation in this way.",
        "enums": [{
            "constants": [{
                "description": "Align text center.",
                "name": "center"
            }, {
                "description": "Align text left.",
                "name": "left"
            }, {
                "description": "Align text right.",
                "name": "right"
            }],
            "description": "Text alignment.",
            "name": "AlignMode"
        }, {
            "constants": [{
                "description": "The arc is drawn like a slice of pie, with the arc circle connected to the center at its end-points.",
                "name": "pie"
            }, {
                "description": "The arc circle's two end-points are unconnected when the arc is drawn as a line. Behaves like the \"closed\" arc type when the arc is drawn in filled mode.",
                "name": "open"
            }, {
                "description": "The arc circle's two end-points are connected to each other.",
                "name": "closed"
            }],
            "description": "Different types of arcs that can be drawn.",
            "name": "ArcType"
        }, {
            "constants": [{
                "description": "Uniform distribution.",
                "name": "uniform"
            }, {
                "description": "Normal (gaussian) distribution.",
                "name": "normal"
            }, {
                "description": "Uniform distribution in an ellipse.",
                "name": "ellipse"
            }, {
                "description": "No distribution - area spread is disabled.",
                "name": "none"
            }],
            "description": "Types of particle area spread distribution.",
            "name": "AreaSpreadDistribution"
        }, {
            "constants": [{
                "description": "The RGB values of what's drawn are multiplied by the alpha values of those colors during blending. This is the default alpha mode.",
                "name": "alphamultiply"
            }, {
                "description": "The RGB values of what's drawn are not multiplied by the alpha values of those colors during blending. For most blend modes to work correctly with this alpha mode, the colors of a drawn object need to have had their RGB values multiplied by their alpha values at some point previously (\"premultiplied alpha\").",
                "name": "premultiplied"
            }],
            "description": "Different ways alpha affects color blending. See BlendMode and the BlendMode Formulas for additional notes.",
            "name": "BlendAlphaMode"
        }, {
            "constants": [{
                "description": "Alpha blending (normal). The alpha of what's drawn determines its opacity.",
                "name": "alpha"
            }, {
                "description": "The colors of what's drawn completely replace what was on the screen, with no additional blending. The BlendAlphaMode specified in love.graphics.setBlendMode still affects what happens.",
                "name": "replace"
            }, {
                "description": "\"Screen\" blending.",
                "name": "screen"
            }, {
                "description": "The pixel colors of what's drawn are added to the pixel colors already on the screen. The alpha of the screen is not modified.",
                "name": "add"
            }, {
                "description": "The pixel colors of what's drawn are subtracted from the pixel colors already on the screen. The alpha of the screen is not modified.",
                "name": "subtract"
            }, {
                "description": "The pixel colors of what's drawn are multiplied with the pixel colors already on the screen (darkening them). The alpha of drawn objects is multiplied with the alpha of the screen rather than determining how much the colors on the screen are affected, even when the \"alphamultiply\" BlendAlphaMode is used.",
                "name": "multiply"
            }, {
                "description": "The pixel colors of what's drawn are compared to the existing pixel colors, and the larger of the two values for each color component is used. Only works when the \"premultiplied\" BlendAlphaMode is used in love.graphics.setBlendMode.",
                "name": "lighten"
            }, {
                "description": "The pixel colors of what's drawn are compared to the existing pixel colors, and the smaller of the two values for each color component is used. Only works when the \"premultiplied\" BlendAlphaMode is used in love.graphics.setBlendMode.",
                "name": "darken"
            }],
            "description": "Different ways to do color blending. See BlendAlphaMode and the BlendMode Formulas for additional notes.",
            "name": "BlendMode"
        }, {
            "constants": [{
                "description": "The default Canvas format - usually an alias for the rgba8 format, or the srgb format if gamma-correct rendering is enabled in LÖVE 0.10.0 and newer.",
                "name": "normal"
            }, {
                "description": "A format suitable for high dynamic range content - an alias for the rgba16f format, normally.",
                "name": "hdr"
            }, {
                "description": "8 bits per channel (32 bpp) RGBA. Color channel values range from 0-255 (0-1 in shaders).",
                "name": "rgba8"
            }, {
                "description": "4 bits per channel (16 bpp) RGBA.",
                "name": "rgba4"
            }, {
                "description": "RGB with 5 bits each, and a 1-bit alpha channel (16 bpp).",
                "name": "rgb5a1"
            }, {
                "description": "RGB with 5, 6, and 5 bits each, respectively (16 bpp). There is no alpha channel in this format.",
                "name": "rgb565"
            }, {
                "description": "RGB with 10 bits per channel, and a 2-bit alpha channel (32 bpp).",
                "name": "rgb10a2"
            }, {
                "description": "Floating point RGBA with 16 bits per channel (64 bpp). Color values can range from [-65504, +65504].",
                "name": "rgba16f"
            }, {
                "description": "Floating point RGBA with 32 bits per channel (128 bpp).",
                "name": "rgba32f"
            }, {
                "description": "Floating point RGB with 11 bits in the red and green channels, and 10 bits in the blue channel (32 bpp). There is no alpha channel. Color values can range from [0, +65024].",
                "name": "rg11b10f"
            }, {
                "description": "The same as rgba8, but the Canvas is interpreted as being in the sRGB color space. Everything drawn to the Canvas will be converted from linear RGB to sRGB. When the Canvas is drawn (or used in a shader), it will be decoded from sRGB to linear RGB. This reduces color banding when doing gamma-correct rendering, since sRGB encoding has more precision than linear RGB for darker colors.",
                "name": "srgb"
            }, {
                "description": "Single-channel (red component) format (8 bpp).",
                "name": "r8"
            }, {
                "description": "Two channels (red and green components) with 8 bits per channel (16 bpp).",
                "name": "rg8"
            }, {
                "description": "Floating point single-channel format (16 bpp). Color values can range from [-65504, +65504].",
                "name": "r16f"
            }, {
                "description": "Floating point two-channel format with 16 bits per channel (32 bpp). Color values can range from [-65504, +65504].",
                "name": "rg16f"
            }, {
                "description": "Floating point single-channel format (32 bpp).",
                "name": "r32f"
            }, {
                "description": "Floating point two-channel format with 32 bits per channel (64 bpp).",
                "name": "rg32f"
            }],
            "description": "Canvas formats.",
            "name": "CanvasFormat"
        }, {
            "constants": [{
                "description": "The stencil value of the pixel must be equal to the supplied value.",
                "name": "equal"
            }, {
                "description": "The stencil value of the pixel must not be equal to the supplied value.",
                "name": "notequal"
            }, {
                "description": "The stencil value of the pixel must be less than the supplied value.",
                "name": "less"
            }, {
                "description": "The stencil value of the pixel must be less than or equal to the supplied value.",
                "name": "lequal"
            }, {
                "description": "The stencil value of the pixel must be greater than or equal to the supplied value.",
                "name": "gequal"
            }, {
                "description": "The stencil value of the pixel must be greater than the supplied value.",
                "name": "greater"
            }],
            "description": "Different types of per-pixel stencil test comparisons. The pixels of an object will be drawn if the comparison succeeds, for each pixel that the object touches.",
            "name": "CompareMode"
        }, {
            "constants": [{
                "description": "Draw filled shape.",
                "name": "fill"
            }, {
                "description": "Draw outlined shape.",
                "name": "line"
            }],
            "description": "Controls whether shapes are drawn as an outline, or filled.",
            "name": "DrawMode"
        }, {
            "constants": [{
                "description": "Scale image with linear interpolation.",
                "name": "linear"
            }, {
                "description": "Scale image with nearest neighbor interpolation.",
                "name": "nearest"
            }],
            "description": "How the image is filtered when scaling.",
            "name": "FilterMode"
        }, {
            "constants": [{
                "description": "Whether the \"clampzero\" WrapMode is supported.",
                "name": "clampzero"
            }, {
                "description": "Whether the \"lighten\" and \"darken\" BlendModes are supported.",
                "name": "lighten"
            }, {
                "description": "Whether multiple Canvases with different formats can be used in the same love.graphics.setCanvas call.",
                "name": "multicanvasformats"
            }],
            "description": "Graphics features that can be checked for with love.graphics.getSupported.",
            "name": "GraphicsFeature"
        }, {
            "constants": [{
                "description": "The maximum size of points.",
                "name": "pointsize"
            }, {
                "description": "The maximum width or height of Images and Canvases.",
                "name": "texturesize"
            }, {
                "description": "The maximum number of simultaneously active canvases (via love.graphics.setCanvas).",
                "name": "multicanvas"
            }, {
                "description": "The maximum number of antialiasing samples for a Canvas.",
                "name": "canvasmsaa"
            }],
            "description": "Types of system-dependent graphics limits checked for using love.graphics.getSystemLimits.",
            "name": "GraphicsLimit"
        }, {
            "constants": [{
                "description": "The ends of the line segments beveled in an angle so that they join seamlessly.",
                "name": "miter"
            }, {
                "description": "No cap applied to the ends of the line segments.",
                "name": "bevel"
            }, {
                "description": "Flattens the point where line segments join together.",
                "name": "none"
            }],
            "description": "Line join style.",
            "name": "LineJoin"
        }, {
            "constants": [{
                "description": "Draw rough lines.",
                "name": "rough"
            }, {
                "description": "Draw smooth lines.",
                "name": "smooth"
            }],
            "description": "The styles in which lines are drawn.",
            "name": "LineStyle"
        }, {
            "constants": [{
                "description": "The vertices create a \"fan\" shape with the first vertex acting as the hub point. Can be easily used to draw simple convex polygons.",
                "name": "fan"
            }, {
                "description": "The vertices create a series of connected triangles using vertices 1, 2, 3, then 3, 2, 4 (note the order), then 3, 4, 5 and so on.",
                "name": "strip"
            }, {
                "description": "The vertices create unconnected triangles.",
                "name": "triangles"
            }, {
                "description": "The vertices are drawn as unconnected points (see love.graphics.setPointSize.)",
                "name": "points"
            }],
            "description": "How a Mesh's vertices are used when drawing.",
            "name": "MeshDrawMode"
        }, {
            "constants": [{
                "description": "Particles are inserted at the top of the ParticleSystem's list of particles.",
                "name": "top"
            }, {
                "description": "Particles are inserted at the bottom of the ParticleSystem's list of particles.",
                "name": "bottom"
            }, {
                "description": "Particles are inserted at random positions in the ParticleSystem's list of particles.",
                "name": "random"
            }],
            "description": "How newly created particles are added to the ParticleSystem.",
            "name": "ParticleInsertMode"
        }, {
            "constants": [{
                "description": "Draw rough points.",
                "name": "rough"
            }, {
                "description": "Draw smooth points.",
                "name": "smooth"
            }],
            "description": "How points should be drawn.",
            "name": "PointStyle"
        }, {
            "constants": [{
                "description": "The object's data will change repeatedly during its lifetime.",
                "name": "dynamic"
            }, {
                "description": "The object will not be modified after initial sprites or vertices are added.",
                "name": "static"
            }, {
                "description": "The object data will always change between draws.",
                "name": "stream"
            }],
            "description": "Usage hints for SpriteBatches and Meshes to optimize data storage and access.",
            "name": "SpriteBatchUsage"
        }, {
            "constants": [{
                "description": "The transformation stack (love.graphics.translate, love.graphics.rotate, etc.)",
                "name": "transform"
            }, {
                "description": "All love.graphics state, including transform state.",
                "name": "all"
            }],
            "description": "Graphics state stack types used with love.graphics.push.",
            "name": "StackType"
        }, {
            "constants": [{
                "description": "The stencil value of a pixel will be replaced by the value specified in love.graphics.stencil, if any object touches the pixel.",
                "name": "replace"
            }, {
                "description": "The stencil value of a pixel will be incremented by 1 for each object that touches the pixel. If the stencil value reaches 255 it will stay at 255.",
                "name": "increment"
            }, {
                "description": "The stencil value of a pixel will be decremented by 1 for each object that touches the pixel. If the stencil value reaches 0 it will stay at 0.",
                "name": "decrement"
            }, {
                "description": "The stencil value of a pixel will be incremented by 1 for each object that touches the pixel. If a stencil value of 255 is incremented it will be set to 0.",
                "name": "incrementwrap"
            }, {
                "description": "The stencil value of a pixel will be decremented by 1 for each object that touches the pixel. If the stencil value of 0 is decremented it will be set to 255.",
                "name": "decrementwrap"
            }, {
                "description": "The stencil value of a pixel will be bitwise-inverted for each object that touches the pixel. If a stencil value of 0 is inverted it will become 255.",
                "name": "invert"
            }],
            "description": "How a stencil function modifies the stencil values of pixels it touches.",
            "name": "StencilAction"
        }, {
            "constants": [{
                "description": "How the image wraps inside a Quad with a larger quad size than image size. This also affects how Meshes with texture coordinates which are outside the range of [0, 1] are drawn, and the color returned by the Texel Shader function when using it to sample from texture coordinates outside of the range of [0, 1].",
                "name": "clamp"
            }, {
                "description": "Repeat the image. Fills the whole available extent.",
                "name": "repeat"
            }, {
                "description": "Repeat the texture, flipping it each time it repeats. May produce better visual results than the repeat mode when the texture doesn't seamlessly tile.",
                "name": "mirroredrepeat"
            }, {
                "description": "Clamp the texture. Fills the area outside the texture's normal range with transparent black (or opaque black for textures with no alpha channel.)",
                "name": "clampzero"
            }],
            "description": "How the image wraps inside a Quad with a larger quad size than image size. This also affects how Meshes with texture coordinates which are outside the range of [0, 1] are drawn, and the color returned by the Texel Shader function when using it to sample from texture coordinates outside of the range of [0, 1].",
            "name": "WrapMode"
        }],
        "functions": [{
            "description": "Draws a filled or unfilled arc at position (x, y). The arc is drawn from angle1 to angle2 in radians. The segments parameter determines how many segments are used to draw the arc. The more segments, the smoother the edge.",
            "name": "arc",
            "variants": [{
                "arguments": [{
                    "description": "How to draw the arc.",
                    "name": "drawmode",
                    "type": "DrawMode"
                }, {
                    "description": "The position of the center along x-axis.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The position of the center along y-axis.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "Radius of the arc.",
                    "name": "radius",
                    "type": "number"
                }, {
                    "description": "The angle at which the arc begins.",
                    "name": "angle1",
                    "type": "number"
                }, {
                    "description": "The angle at which the arc terminates.",
                    "name": "angle2",
                    "type": "number"
                }, {
                    "default": "10",
                    "description": "The number of segments used for drawing the arc.",
                    "name": "segments",
                    "type": "number"
                }],
                "description": "Draws an arc using the \"pie\" ArcType."
            }, {
                "arguments": [{
                    "description": "How to draw the arc.",
                    "name": "drawmode",
                    "type": "DrawMode"
                }, {
                    "description": "The type of arc to draw.",
                    "name": "arctype",
                    "type": "ArcType"
                }, {
                    "description": "The position of the center along x-axis.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The position of the center along y-axis.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "Radius of the arc.",
                    "name": "radius",
                    "type": "number"
                }, {
                    "description": "The angle at which the arc begins.",
                    "name": "angle1",
                    "type": "number"
                }, {
                    "description": "The angle at which the arc terminates.",
                    "name": "angle2",
                    "type": "number"
                }, {
                    "default": "10",
                    "description": "The number of segments used for drawing the arc.",
                    "name": "segments",
                    "type": "number"
                }],
                "description": "Draws an arc using the \"pie\" ArcType."
            }]
        }, {
            "description": "Draws a circle.",
            "name": "circle",
            "variants": [{
                "arguments": [{
                    "description": "How to draw the circle.",
                    "name": "mode",
                    "type": "DrawMode"
                }, {
                    "description": "The position of the center along x-axis.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The position of the center along y-axis.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "The radius of the circle.",
                    "name": "radius",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "How to draw the circle.",
                    "name": "mode",
                    "type": "DrawMode"
                }, {
                    "description": "The position of the center along x-axis.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The position of the center along y-axis.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "The radius of the circle.",
                    "name": "radius",
                    "type": "number"
                }, {
                    "description": "The number of segments used for drawing the circle. Note: The default variable for the segments parameter varies between different versions of LÖVE.",
                    "name": "segments",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Clears the screen to the background color in LÖVE 0.9.2 and earlier, or to the specified color in 0.10.0 and newer.\n\nThis function is called automatically before love.draw in the default love.run function. See the example in love.run for a typical use of this function.\n\nNote that the scissor area bounds the cleared region.",
            "name": "clear",
            "variants": [{
                "description": "Clears the screen to the background color in 0.9.2 and earlier, or to transparent black (0, 0, 0, 0) in LÖVE 0.10.0 and newer."
            }, {
                "arguments": [{
                    "description": "The red channel of the color to clear the screen to.",
                    "name": "r",
                    "type": "number"
                }, {
                    "description": "The green channel of the color to clear the screen to.",
                    "name": "g",
                    "type": "number"
                }, {
                    "description": "The blue channel of the color to clear the screen to.",
                    "name": "b",
                    "type": "number"
                }, {
                    "default": "255",
                    "description": "The alpha channel of the color to clear the screen to.",
                    "name": "a",
                    "type": "number"
                }],
                "description": "Clears the screen or active Canvas to the specified color."
            }, {
                "arguments": [{
                    "description": "A table in the form of {r, g, b, a} containing the color to clear the first active Canvas to.",
                    "name": "color",
                    "type": "table"
                }, {
                    "description": "Additional tables for each active Canvas.",
                    "name": "...",
                    "type": "table"
                }],
                "description": "Clears multiple active Canvases to different colors, if multiple Canvases are active at once via love.graphics.setCanvas."
            }]
        }, {
            "description": "Discards (trashes) the contents of the screen or active Canvas. This is a performance optimization function with niche use cases.\n\nIf the active Canvas has just been changed and the \"replace\" BlendMode is about to be used to draw something which covers the entire screen, calling love.graphics.discard rather than calling love.graphics.clear or doing nothing may improve performance on mobile devices.\n\nOn some desktop systems this function may do nothing.",
            "name": "discard",
            "variants": [{
                "arguments": [{
                    "default": "true",
                    "description": "Whether to discard the texture(s) of the active Canvas(es) (the contents of the screen if no Canvas is active).",
                    "name": "discardcolor",
                    "type": "boolean"
                }, {
                    "default": "true",
                    "description": "Whether to discard the contents of the stencil buffer of the screen / active Canvas.",
                    "name": "discardstencil",
                    "type": "boolean"
                }]
            }, {
                "arguments": [{
                    "description": "An array containing boolean values indicating whether to discard the texture of each active Canvas, when multiple simultaneous Canvases are active.",
                    "name": "discardcolors",
                    "type": "table"
                }, {
                    "default": "true",
                    "description": "Whether to discard the contents of the stencil buffer of the screen / active Canvas.",
                    "name": "discardstencil",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Draws a Drawable object (an Image, Canvas, SpriteBatch, ParticleSystem, Mesh, or Video) on the screen with optional rotation, scaling and shearing.\n\nObjects are drawn relative to their local coordinate system. The origin is by default located at the top left corner of Image and Canvas. All scaling, shearing, and rotation arguments transform the object relative to that point. Also, the position of the origin can be specified on the screen coordinate system.\n\nIt's possible to rotate an object about its center by offsetting the origin to the center. Angles must be given in radians for rotation. One can also use a negative scaling factor to flip about its centerline.\n\nNote that the offsets are applied before rotation, scaling, or shearing; scaling and shearing are applied before rotation.\n\nThe right and bottom edges of the object are shifted at an angle defined by the shearing factors.",
            "name": "draw",
            "variants": [{
                "arguments": [{
                    "description": "A drawable object.",
                    "name": "drawable",
                    "type": "Drawable"
                }, {
                    "default": "0",
                    "description": "The position to draw the object (x-axis).",
                    "name": "x",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "The position to draw the object (y-axis).",
                    "name": "y",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Orientation (radians).",
                    "name": "r",
                    "type": "number"
                }, {
                    "default": "1",
                    "description": "Scale factor (x-axis). Can be negative.",
                    "name": "sx",
                    "type": "number"
                }, {
                    "default": "sx",
                    "description": "Scale factor (y-axis). Can be negative.",
                    "name": "sy",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Origin offset (x-axis). (A value of 20 would effectively move your drawable object 20 pixels to the left.)",
                    "name": "ox",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Origin offset (y-axis). (A value of 20 would effectively move your drawable object 20 pixels up.)",
                    "name": "oy",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Shearing factor (x-axis).",
                    "name": "kx",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Shearing factor (y-axis).",
                    "name": "ky",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "A Texture (Image or Canvas) to texture the Quad with.",
                    "name": "texture",
                    "type": "Texture"
                }, {
                    "description": "The Quad to draw on screen.",
                    "name": "quad",
                    "type": "Quad"
                }, {
                    "default": "0",
                    "description": "The position to draw the object (x-axis).",
                    "name": "x",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "The position to draw the object (y-axis).",
                    "name": "y",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Orientation (radians).",
                    "name": "r",
                    "type": "number"
                }, {
                    "default": "1",
                    "description": "Scale factor (x-axis). Can be negative.",
                    "name": "sx",
                    "type": "number"
                }, {
                    "default": "sx",
                    "description": "Scale factor (y-axis). Can be negative.",
                    "name": "sy",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Origin offset (x-axis).",
                    "name": "ox",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Origin offset (y-axis)",
                    "name": "oy",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Shearing factor (x-axis).",
                    "name": "kx",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Shearing factor (y-axis).",
                    "name": "ky",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Draws an ellipse.",
            "name": "ellipse",
            "variants": [{
                "arguments": [{
                    "description": "How to draw the ellipse.",
                    "name": "mode",
                    "type": "DrawMode"
                }, {
                    "description": "The position of the center along x-axis.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The position of the center along y-axis.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "The radius of the ellipse along the x-axis (half the ellipse's width.)",
                    "name": "radiusx",
                    "type": "number"
                }, {
                    "description": "The radius of the ellipse along the y-axis (half the ellipse's height.)",
                    "name": "radiusy",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "How to draw the ellipse.",
                    "name": "mode",
                    "type": "DrawMode"
                }, {
                    "description": "The position of the center along x-axis.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The position of the center along y-axis.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "The radius of the ellipse along the x-axis (half the ellipse's width.)",
                    "name": "radiusx",
                    "type": "number"
                }, {
                    "description": "The radius of the ellipse along the y-axis (half the ellipse's height.)",
                    "name": "radiusy",
                    "type": "number"
                }, {
                    "description": "The number of segments used for drawing the ellipse.",
                    "name": "segments",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets the currently rendering screen",
            "name" : "getActiveScreen",
            "variants": [{
                "returns": [{
                    "description": "The currently rendering screen",
                    "name": "screen",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Gets the current background color.",
            "name": "getBackgroundColor",
            "variants": [{
                "returns": [{
                    "description": "The red component (0-255).",
                    "name": "r",
                    "type": "number"
                }, {
                    "description": "The green component (0-255).",
                    "name": "g",
                    "type": "number"
                }, {
                    "description": "The blue component (0-255).",
                    "name": "b",
                    "type": "number"
                }, {
                    "description": "The alpha component (0-255).",
                    "name": "a",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets the blending mode.",
            "name": "getBlendMode",
            "variants": [{
                "returns": [{
                    "description": "The current blend mode.",
                    "name": "mode",
                    "type": "BlendMode"
                }, {
                    "description": "The current blend alpha mode – it determines how the alpha of drawn objects affects blending.",
                    "name": "alphamode",
                    "type": "BlendAlphaMode"
                }]
            }]
        }, {
            "description": "Gets the current target Canvas.",
            "name": "getCanvas",
            "variants": [{
                "returns": [{
                    "description": "The Canvas set by setCanvas. Returns nil if drawing to the real screen.",
                    "name": "canvas",
                    "type": "Canvas"
                }]
            }]
        }, {
            "description": "Gets the available Canvas formats, and whether each is supported.",
            "name": "getCanvasFormats",
            "variants": [{
                "returns": [{
                    "description": "A table containing CanvasFormats as keys, and a boolean indicating whether the format is supported as values. Not all systems support all formats.",
                    "name": "formats",
                    "type": "table"
                }]
            }]
        }, {
            "description": "Gets the current color.",
            "name": "getColor",
            "variants": [{
                "returns": [{
                    "description": "The red component (0-255).",
                    "name": "r",
                    "type": "number"
                }, {
                    "description": "The red component (0-255).",
                    "name": "g",
                    "type": "number"
                }, {
                    "description": "The blue component (0-255).",
                    "name": "b",
                    "type": "number"
                }, {
                    "description": "The alpha component (0-255).",
                    "name": "a",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets the active color components used when drawing. Normally all 4 components are active unless love.graphics.setColorMask has been used.\n\nThe color mask determines whether individual components of the colors of drawn objects will affect the color of the screen. They affect love.graphics.clear and Canvas:clear as well.",
            "name": "getColorMask",
            "variants": [{
                "returns": [{
                    "description": "Whether the red color component is active when rendering.",
                    "name": "r",
                    "type": "boolean"
                }, {
                    "description": "Whether the green color component is active when rendering.",
                    "name": "g",
                    "type": "boolean"
                }, {
                    "description": "Whether the blue color component is active when rendering.",
                    "name": "b",
                    "type": "boolean"
                }, {
                    "description": "Whether the alpha color component is active when rendering.",
                    "name": "a",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Gets the available compressed image formats, and whether each is supported.",
            "name": "getCompressedImageFormats",
            "variants": [{
                "returns": [{
                    "description": "A table containing CompressedFormats as keys, and a boolean indicating whether the format is supported as values. Not all systems support all formats.",
                    "name": "formats",
                    "type": "table"
                }]
            }]
        }, {
            "description": "Returns the default scaling filters used with Images, Canvases, and Fonts.",
            "name": "getDefaultFilter",
            "variants": [{
                "returns": [{
                    "description": "Filter mode used when scaling the image down.",
                    "name": "min",
                    "type": "FilterMode"
                }, {
                    "description": "Filter mode used when scaling the image up.",
                    "name": "mag",
                    "type": "FilterMode"
                }, {
                    "description": "Maximum amount of Anisotropic Filtering used.",
                    "name": "anisotropy",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets the width and height of the window.",
            "name": "getDimensions",
            "variants": [{
                "returns": [{
                    "description": "The width of the window.",
                    "name": "width",
                    "type": "number"
                }, {
                    "description": "The height of the window.",
                    "name": "height",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets the current Font object.",
            "name": "getFont",
            "variants": [{
                "returns": [{
                    "description": "The current Font, or nil if none is set.",
                    "name": "font",
                    "type": "Font"
                }]
            }]
        }, {
            "description": "Gets the height of the window.",
            "name": "getHeight",
            "variants": [{
                "returns": [{
                    "description": "The height of the window.",
                    "name": "height",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets the line join style.",
            "name": "getLineJoin",
            "variants": [{
                "returns": [{
                    "description": "The LineJoin style.",
                    "name": "join",
                    "type": "LineJoin"
                }]
            }]
        }, {
            "description": "Gets the line style.",
            "name": "getLineStyle",
            "variants": [{
                "returns": [{
                    "description": "The current line style.",
                    "name": "style",
                    "type": "LineStyle"
                }]
            }]
        }, {
            "description": "Gets the current line width.",
            "name": "getLineWidth",
            "variants": [{
                "returns": [{
                    "description": "The current line width.",
                    "name": "width",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Returns the current Shader. Returns nil if none is set.",
            "name": "getShader",
            "variants": [{
                "returns": [{
                    "description": "The current Shader.",
                    "name": "shader",
                    "type": "Shader"
                }]
            }]
        }, {
            "description": "Gets performance-related rendering statistics.",
            "name": "getStats",
            "variants": [{
                "returns": [{
                    "description": "The number of draw calls made so far during the current frame.",
                    "name": "drawcalls",
                    "type": "number"
                }, {
                    "description": "The number of times the active Canvas has been switched so far during the current frame.",
                    "name": "canvasswitches",
                    "type": "number"
                }, {
                    "description": "The estimated total size in bytes of video memory used by all loaded Images, Canvases, and Fonts.",
                    "name": "texturememory",
                    "type": "number"
                }, {
                    "description": "The number of Image objects currently loaded.",
                    "name": "images",
                    "type": "number"
                }, {
                    "description": "The number of Canvas objects currently loaded.",
                    "name": "canvases",
                    "type": "number"
                }, {
                    "description": "The number of Font objects currently loaded.",
                    "name": "fonts",
                    "type": "number"
                }, {
                    "description": "The number of times the active Shader has been changed so far during the current frame.",
                    "name": "shaderswitches",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets whether stencil testing is enabled.\n\nWhen stencil testing is enabled, the geometry of everything that is drawn will be clipped / stencilled out based on whether it intersects with what has been previously drawn to the stencil buffer.\n\nEach Canvas has its own stencil buffer.",
            "name": "getStencilTest",
            "variants": [{
                "returns": [{
                    "description": "Whether stencil testing is enabled.",
                    "name": "enabled",
                    "type": "boolean"
                }, {
                    "description": "Whether the stencil test is inverted or not.",
                    "name": "inverted",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Gets the optional graphics features and whether they're supported on the system.\n\nSome older or low-end systems don't always support all graphics features.",
            "name": "getSupported",
            "variants": [{
                "returns": [{
                    "description": "A table containing GraphicsFeature keys, and boolean values indicating whether each feature is supported.",
                    "name": "features",
                    "type": "table"
                }]
            }]
        }, {
            "description": "Gets the system-dependent maximum values for love.graphics features.",
            "name": "getSystemLimits",
            "variants": [{
                "returns": [{
                    "description": "A table containing GraphicsLimit keys, and number values.",
                    "name": "limits",
                    "type": "table"
                }]
            }]
        }, {
            "description": "Gets the point size.",
            "name": "getPointSize",
            "variants": [{
                "returns": [{
                    "description": "The current point size.",
                    "name": "size",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets information about the system's video card and drivers.",
            "name": "getRendererInfo",
            "variants": [{
                "returns": [{
                    "description": "The name of the renderer, e.g. \"OpenGL\" or \"OpenGL ES\".",
                    "name": "name",
                    "type": "string"
                }, {
                    "description": "The version of the renderer with some extra driver-dependent version info, e.g. \"2.1 INTEL-8.10.44\".",
                    "name": "version",
                    "type": "string"
                }, {
                    "description": "The name of the graphics card vendor, e.g. \"Intel Inc\".",
                    "name": "vendor",
                    "type": "string"
                }, {
                    "description": "The name of the graphics card, e.g. \"Intel HD Graphics 3000 OpenGL Engine\".",
                    "name": "device",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Gets the current scissor box.",
            "name": "getScissor",
            "variants": [{
                "returns": [{
                    "description": "The x component of the top-left point of the box.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The y component of the top-left point of the box.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "The width of the box.",
                    "name": "width",
                    "type": "number"
                }, {
                    "description": "The height of the box.",
                    "name": "height",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Get the names of the renderable screens.",
            "name": "getScreens",
            "variants": [{
                "returns": [{
                    "description": "The names of the renderable screens.",
                    "name": "screens",
                    "type": "table"
                }]
            }]
        }, {
            "description": "Check if Wide Mode is enabled. Nintendo 3DS only",
            "name": "getWide",
            "variants": [{
                "returns": [{
                    "description": "True if Wide Mode is enabled, false otherwise.",
                    "name": "wide",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Gets the width of the window. On 3DS, you may pass \"top\" or \"bottom\" to get a specific screen's width.",
            "name": "getWidth",
            "variants": [{
                "returns": [{
                    "description": "The width of the window.",
                    "name": "width",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "The name of the specific screen to get the width of.",
                    "name": "screenName",
                    "type": "string"
                }],
                "returns": [{
                    "description": "The width of the screen.",
                    "name": "width",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Check if Stereoscopic 3D is enabled. Nintendo 3DS only",
            "name": "get3D",
            "variants": [{
                "returns": [{
                    "description": "True if Stereoscopic 3D is enabled, false otherwise.",
                    "name": "enabled",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Gets the current 3D slider value on 3DS (0 ~ 1), useful for \"3D rendering\". This will throw an error on Switch as it is not supported on there.",
            "name": "get3DDepth",
            "variants": [{
                "returns": [{
                    "description": "The current 3D slider value.",
                    "name": "sysDepth",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Sets the scissor to the rectangle created by the intersection of the specified rectangle with the existing scissor. If no scissor is active yet, it behaves like love.graphics.setScissor.\n\nThe scissor limits the drawing area to a specified rectangle. This affects all graphics calls, including love.graphics.clear.\n\nThe dimensions of the scissor is unaffected by graphical transformations (translate, scale, ...).",
            "name": "intersectScissor",
            "variants": [{
                "arguments": [{
                    "description": "The x-coordinate of the upper left corner of the rectangle to intersect with the existing scissor rectangle.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The y-coordinate of the upper left corner of the rectangle to intersect with the existing scissor rectangle.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "The width of the rectangle to intersect with the existing scissor rectangle.",
                    "name": "width",
                    "type": "number"
                }, {
                    "description": "The height of the rectangle to intersect with the existing scissor rectangle.",
                    "name": "height",
                    "type": "number"
                }],
                "description": "Limits the drawing area to a specified rectangle."
            }, {
                "description": "Disables scissor."
            }]
        }, {
            "description": "Check if active.",
            "name": "isActive",
            "variants": [{
                "returns": [{
                    "description": "True if active, false otherwise.",
                    "name": "active",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Check if created.",
            "name": "isCreated",
            "variants": [{
                "returns": [{
                    "description": "True if created, false otherwise.",
                    "name": "created",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Draws lines between points.",
            "name": "line",
            "variants": [{
                "arguments": [{
                    "description": "The position of first point on the x-axis.",
                    "name": "x1",
                    "type": "number"
                }, {
                    "description": "The position of first point on the y-axis.",
                    "name": "y1",
                    "type": "number"
                }, {
                    "description": "The position of second point on the x-axis.",
                    "name": "x2",
                    "type": "number"
                }, {
                    "description": "The position of second point on the y-axis.",
                    "name": "y2",
                    "type": "number"
                }, {
                    "description": "You can continue passing point positions to draw a polyline.",
                    "name": "...",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "A table of point positions.",
                    "name": "points",
                    "type": "table"
                }]
            }]
        }, {
            "description": "Creates a new Canvas object for offscreen rendering.\n\nAntialiased Canvases have slightly higher system requirements than normal Canvases. Additionally, the supported maximum number of MSAA samples varies depending on the system. Use love.graphics.getSystemLimit to check.\n\nIf the number of MSAA samples specified is greater than the maximum supported by the system, the Canvas will still be created but only using the maximum supported amount (this includes 0.)",
            "name": "newCanvas",
            "variants": [{
                "arguments": [{
                    "default": "window width",
                    "description": "The width of the Canvas.",
                    "name": "width",
                    "type": "number"
                }, {
                    "default": "window height",
                    "description": "The height of the Canvas.",
                    "name": "height",
                    "type": "number"
                }, {
                    "default": "\"normal\"",
                    "description": "The desired texture mode of the Canvas.",
                    "name": "format",
                    "type": "CanvasFormat"
                }, {
                    "default": "0",
                    "description": "The desired number of antialiasing samples used when drawing to the Canvas.",
                    "name": "msaa",
                    "type": "number"
                }],
                "returns": [{
                    "description": "A new Canvas object.",
                    "name": "canvas",
                    "type": "Canvas"
                }]
            }]
        }, {
            "description": "Creates a new Font.",
            "name": "newFont",
            "variants": [{
                "arguments": [{
                    "description": "The filepath to the font file.",
                    "name": "filename",
                    "type": "string"
                }, {
                    "default": "12",
                    "description": "The size of the font in pixels.",
                    "name": "size",
                    "type": "number"
                }],
                "returns": [{
                    "description": "A Font object which can be used to draw text on screen.",
                    "name": "font",
                    "type": "Font"
                }]
            }, {
                "arguments": [{
                    "description": "A File pointing to a font.",
                    "name": "file",
                    "type": "File"
                }, {
                    "default": "12",
                    "description": "The size of the font in pixels.",
                    "name": "size",
                    "type": "number"
                }],
                "returns": [{
                    "description": "A Font object which can be used to draw text on screen.",
                    "name": "font",
                    "type": "Font"
                }]
            }, {
                "arguments": [{
                    "description": "The encoded data to decode into a font.",
                    "name": "filedata",
                    "type": "FileData"
                }, {
                    "default": "12",
                    "description": "The size of the font in pixels.",
                    "name": "size",
                    "type": "number"
                }],
                "returns": [{
                    "description": "A Font object which can be used to draw text on screen.",
                    "name": "font",
                    "type": "Font"
                }]
            }, {
                "arguments": [{
                    "default": "12",
                    "description": "The size of the font in pixels.",
                    "name": "size",
                    "type": "number"
                }],
                "description": "This variant uses the default font (Vera Sans) with a custom size.",
                "returns": [{
                    "description": "A Font object which can be used to draw text on screen.",
                    "name": "font",
                    "type": "Font"
                }]
            }]
        }, {
            "description": "Creates a new Image from a filepath, FileData, an ImageData, or a CompressedImageData, and optionally generates or specifies mipmaps for the image.",
            "name": "newImage",
            "variants": [{
                "arguments": [{
                    "description": "The filepath to the image file.",
                    "name": "filename",
                    "type": "string"
                }],
                "returns": [{
                    "description": "An Image object which can be drawn on screen.",
                    "name": "image",
                    "type": "Image"
                }]
            }, {
                "arguments": [{
                    "description": "An ImageData object. The Image will use this ImageData to reload itself when love.window.setMode is called.",
                    "name": "imageData",
                    "type": "ImageData"
                }],
                "returns": [{
                    "description": "An Image object which can be drawn on screen.",
                    "name": "image",
                    "type": "Image"
                }]
            }, {
                "arguments": [{
                    "description": "A CompressedImageData object. The Image will use this CompressedImageData to reload itself when love.window.setMode is called.",
                    "name": "compressedImageData",
                    "type": "CompressedImageData"
                }],
                "returns": [{
                    "description": "An Image object which can be drawn on screen.",
                    "name": "image",
                    "type": "Image"
                }]
            }, {
                "arguments": [{
                    "description": "The filepath to the image file (or a FileData or ImageData or CompressedImageData object).",
                    "name": "filename",
                    "type": "string"
                }, {
                    "description": "A table containing the following fields:",
                    "name": "flags",
                    "table": [{
                        "default": "false",
                        "description": "True if the image's pixels should be interpreted as being linear RGB rather than sRGB-encoded, if gamma-correct rendering is enabled. Has no effect otherwise.",
                        "name": "linear",
                        "type": "boolean"
                    }, {
                        "default": "false",
                        "description": "If true, mipmaps for the image will be automatically generated (or taken from the images's file if possible, if the image originated from a CompressedImageData). If this value is a table, it should contain a list of other filenames of images of the same format that have progressively half-sized dimensions, all the way down to 1x1. Those images will be used as this Image's mipmap levels.",
                        "name": "mipmaps",
                        "type": "boolean or table"
                    }],
                    "type": "table"
                }],
                "returns": [{
                    "description": "An Image object which can be drawn on screen.",
                    "name": "image",
                    "type": "Image"
                }]
            }]
        }, {
            "description": "Creates a new Font.",
            "name": "newText",
            "variants": [{
                "arguments": [{
                    "description": "The font to use for the text.",
                    "name": "font",
                    "type": "Font"
                }, {
                    "default": "nil",
                    "description": "The initial string of text that the new Text object will contain. May be nil.",
                    "name": "textstring",
                    "type": "string"
                }],
                "returns": [{
                    "description": "The new drawable Text object.",
                    "name": "text",
                    "type": "Text"
                }]
            }]
        }, {
            "description": "Creates a new Quad.\n\nThe purpose of a Quad is to describe the result of the following transformation on any drawable object. The object is first scaled to dimensions sw * sh. The Quad then describes the rectangular area of dimensions width * height whose upper left corner is at position (x, y) inside the scaled object.",
            "name": "newQuad",
            "variants": [{
                "arguments": [{
                    "description": "The top-left position along the x-axis.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The top-left position along the y-axis.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "The width of the Quad.",
                    "name": "width",
                    "type": "number"
                }, {
                    "description": "The height of the Quad.",
                    "name": "height",
                    "type": "number"
                }, {
                    "description": "The reference width, the width of the Image.",
                    "name": "sw",
                    "type": "number"
                }, {
                    "description": "The reference height, the height of the Image.",
                    "name": "sh",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new Quad.",
                    "name": "quad",
                    "type": "Quad"
                }]
            }]
        },  {
            "description": "Creates a new drawable Video. Currently only Ogg Theora video files are supported.",
            "name": "_newVideo",
            "variants": [{
                "arguments": [{
                    "description": "The file path to the Ogg Theora video file.",
                    "name": "filename",
                    "type": "string"
                }, {
                    "default": "nil",
                    "description": "Whether to try to load the video's audio into an audio Source. If not explicitly set to true or false, it will try without causing an error if the video has no audio.",
                    "name": "loadaudio",
                    "type": "boolean"
                }],
                "returns": [{
                    "description": "A new Video.",
                    "name": "video",
                    "type": "Video"
                }]
            }, {
                "arguments": [{
                    "description": "A video stream object.",
                    "name": "videostream",
                    "type": "VideoStream"
                }, {
                    "default": "nil",
                    "description": "Whether to try to load the video's audio into an audio Source. If not explicitly set to true or false, it will try without causing an error if the video has no audio.",
                    "name": "loadaudio",
                    "type": "boolean"
                }],
                "returns": [{
                    "description": "A new Video.",
                    "name": "video",
                    "type": "Video"
                }]
            }]
        }, {
            "description": "Resets the current coordinate transformation.\n\nThis function is always used to reverse any previous calls to love.graphics.rotate, love.graphics.scale, love.graphics.shear or love.graphics.translate. It returns the current transformation state to its defaults.",
            "name": "origin",
            "variants": [[]]
        }, {
            "description": "Draws one or more points.",
            "name": "points",
            "variants": [{
                "arguments": [{
                    "description": "The position of the first point on the x-axis.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The position of the first point on the y-axis.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "The x and y coordinates of additional points.",
                    "name": "...",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "A table containing multiple point positions, in the form of {x, y, ...}.",
                    "name": "points",
                    "table": [{
                        "description": "The position of the first point on the x-axis.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The position of the first point on the y-axis.",
                        "name": "y",
                        "type": "number"
                    }, {
                        "description": "The x and y coordinates of additional points.",
                        "name": "...",
                        "type": "number"
                    }],
                    "type": "table"
                }]
            }, {
                "arguments": [{
                    "description": "A table containing multiple individually colored points, in the form of {point, ...}. Each table contains the position and color of a point in the form of {x, y, r, g, b, a}. The color components are optional.",
                    "name": "points",
                    "table": [{
                        "description": "A table containing the position and color of the first point, in the form of {x, y, r, g, b, a}. The color components are optional.",
                        "name": "point",
                        "type": "table"
                    }, {
                        "description": "Additional tables containing the position and color of more points, in the form of {x, y, r, g, b, a}. The color components are optional.",
                        "name": "...",
                        "type": "table"
                    }],
                    "type": "table"
                }]
            }]
        }, {
            "description": "Draw a polygon.\n\nFollowing the mode argument, this function can accept multiple numeric arguments or a single table of numeric arguments. In either case the arguments are interpreted as alternating x and y coordinates of the polygon's vertices.\n\nWhen in fill mode, the polygon must be convex and simple or rendering artifacts may occur.",
            "name": "polygon",
            "variants": [{
                "arguments": [{
                    "description": "How to draw the polygon.",
                    "name": "mode",
                    "type": "DrawMode"
                }, {
                    "description": "The vertices of the polygon.",
                    "name": "...",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "How to draw the polygon.",
                    "name": "mode",
                    "type": "DrawMode"
                }, {
                    "description": "The vertices of the polygon as a table.",
                    "name": "vertices",
                    "type": "table"
                }]
            }]
        }, {
            "description": "Pops the current coordinate transformation from the transformation stack.\n\nThis function is always used to reverse a previous push operation. It returns the current transformation state to what it was before the last preceding push. For an example, see the description of love.graphics.push.",
            "name": "pop",
            "variants": [[]]
        }, {
            "description": "Displays the results of drawing operations on the screen.\n\nThis function is used when writing your own love.run function. It presents all the results of your drawing operations on the screen. See the example in love.run for a typical use of this function.",
            "name": "present",
            "variants": [[]]
        }, {
            "description": "Draws text on screen. If no Font is set, one will be created and set (once) if needed.\n\nAs of LOVE 0.7.1, when using translation and scaling functions while drawing text, this function assumes the scale occurs first. If you don't script with this in mind, the text won't be in the right position, or possibly even on screen.\n\nlove.graphics.print and love.graphics.printf both suppport UTF-8 encoding. You'll also need a proper Font for special characters.",
            "name": "print",
            "variants": [{
                "arguments": [{
                    "description": "The text to draw.",
                    "name": "text",
                    "type": "string"
                }, {
                    "description": "The position to draw the object (x-axis).",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The position to draw the object (y-axis).",
                    "name": "y",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Orientation (radians).",
                    "name": "r",
                    "type": "number"
                }, {
                    "default": "1",
                    "description": "Scale factor (x-axis).",
                    "name": "sx",
                    "type": "number"
                }, {
                    "default": "sx",
                    "description": "Scale factor (y-axis).",
                    "name": "sy",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Origin offset (x-axis).",
                    "name": "ox",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Origin offset (y-axis).",
                    "name": "oy",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Shear factor (x-axis).",
                    "name": "kx",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Shear factor (y-axis).",
                    "name": "ky",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "A table containing colors and strings to add to the object, in the form of {color1, string1, color2, string2, ...}.",
                    "name": "coloredtext",
                    "table": [{
                        "description": "A table containing red, green, blue, and optional alpha components to use as a color for the next string in the table, in the form of {red, green, blue, alpha}.",
                        "name": "color1",
                        "type": "table"
                    }, {
                        "description": "A string of text which has a color specified by the previous color.",
                        "name": "string1",
                        "type": "string"
                    }, {
                        "description": "A table containing red, green, blue, and optional alpha components to use as a color for the next string in the table, in the form of {red, green, blue, alpha}.",
                        "name": "color2",
                        "type": "table"
                    }, {
                        "description": "A string of text which has a color specified by the previous color.",
                        "name": "string2",
                        "type": "string"
                    }, {
                        "description": "Additional colors and strings.",
                        "name": "...",
                        "type": "tables and strings"
                    }],
                    "type": "table"
                }, {
                    "description": "The position of the new text on the x-axis.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The position of the new text on the y-axis.",
                    "name": "y",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "The orientation of the object in radians.",
                    "name": "angle",
                    "type": "number"
                }, {
                    "default": "1",
                    "description": "Scale factor on the x-axis.",
                    "name": "sx",
                    "type": "number"
                }, {
                    "default": "sx",
                    "description": "Scale factor on the y-axis.",
                    "name": "sy",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Origin offset on the x-axis.",
                    "name": "ox",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Origin offset on the y-axis.",
                    "name": "oy",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Shearing / skew factor on the x-axis.",
                    "name": "kx",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Shearing / skew factor on the y-axis.",
                    "name": "ky",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Draws formatted text, with word wrap and alignment.\n\nSee additional notes in love.graphics.print.\n\nIn version 0.9.2 and earlier, wrapping was implemented by breaking up words by spaces and putting them back together to make sure things fit nicely within the limit provided. However, due to the way this is done, extra spaces between words would end up missing when printed on the screen, and some lines could overflow past the provided wrap limit. In version 0.10.0 and newer this is no longer the case.",
            "name": "printf",
            "variants": [{
                "arguments": [{
                    "description": "A text string.",
                    "name": "text",
                    "type": "string"
                }, {
                    "description": "The position on the x-axis.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The position on the y-axis.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "Wrap the line after this many horizontal pixels.",
                    "name": "limit",
                    "type": "number"
                }, {
                    "default": "\"left\"",
                    "description": "The alignment.",
                    "name": "align",
                    "type": "AlignMode"
                }, {
                    "default": "0",
                    "description": "Orientation (radians).",
                    "name": "r",
                    "type": "number"
                }, {
                    "default": "1",
                    "description": "Scale factor (x-axis).",
                    "name": "sx",
                    "type": "number"
                }, {
                    "default": "sx",
                    "description": "Scale factor (y-axis).",
                    "name": "sy",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Origin offset (x-axis).",
                    "name": "ox",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Origin offset (y-axis).",
                    "name": "oy",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Shear factor (x-axis).",
                    "name": "kx",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Shear factor (y-axis).",
                    "name": "ky",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "A table containing colors and strings to add to the object, in the form of {color1, string1, color2, string2, ...}.",
                    "name": "coloredtext",
                    "table": [{
                        "description": "A table containing red, green, blue, and optional alpha components to use as a color for the next string in the table, in the form of {red, green, blue, alpha}.",
                        "name": "color1",
                        "type": "table"
                    }, {
                        "description": "A string of text which has a color specified by the previous color.",
                        "name": "string1",
                        "type": "string"
                    }, {
                        "description": "A table containing red, green, blue, and optional alpha components to use as a color for the next string in the table, in the form of {red, green, blue, alpha}.",
                        "name": "color2",
                        "type": "table"
                    }, {
                        "description": "A string of text which has a color specified by the previous color.",
                        "name": "string2",
                        "type": "string"
                    }, {
                        "description": "Additional colors and strings.",
                        "name": "...",
                        "type": "tables and strings"
                    }],
                    "type": "table"
                }, {
                    "description": "The position of the new text on the x-axis.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The position of the new text on the y-axis.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "The maximum width in pixels of the text before it gets automatically wrapped to a new line.",
                    "name": "wraplimit",
                    "type": "number"
                }, {
                    "description": "The alignment of the text.",
                    "name": "align",
                    "type": "AlignMode"
                }, {
                    "default": "0",
                    "description": "The orientation of the object in radians.",
                    "name": "angle",
                    "type": "number"
                }, {
                    "default": "1",
                    "description": "Scale factor on the x-axis.",
                    "name": "sx",
                    "type": "number"
                }, {
                    "default": "sx",
                    "description": "Scale factor on the y-axis.",
                    "name": "sy",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Origin offset on the x-axis.",
                    "name": "ox",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Origin offset on the y-axis.",
                    "name": "oy",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Shearing / skew factor on the x-axis.",
                    "name": "kx",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "Shearing / skew factor on the y-axis.",
                    "name": "ky",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Copies and pushes the current coordinate transformation to the transformation stack.\n\nThis function is always used to prepare for a corresponding pop operation later. It stores the current coordinate transformation state into the transformation stack and keeps it active. Later changes to the transformation can be undone by using the pop operation, which returns the coordinate transform to the state it was in before calling push.",
            "name": "push",
            "variants": [{
                "arguments": [{
                    "default": "\"transform\"",
                    "description": "The type of stack to push (e.g. just transformation state, or all love.graphics state).",
                    "name": "stack",
                    "type": "StackType"
                }]
            }]
        }, {
            "description": "Draws a rectangle.",
            "name": "rectangle",
            "variants": [{
                "arguments": [{
                    "description": "How to draw the rectangle.",
                    "name": "mode",
                    "type": "DrawMode"
                }, {
                    "description": "The position of top-left corner along the x-axis.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The position of top-left corner along the y-axis.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "Width of the rectangle.",
                    "name": "width",
                    "type": "number"
                }, {
                    "description": "Height of the rectangle.",
                    "name": "height",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "How to draw the rectangle.",
                    "name": "mode",
                    "type": "DrawMode"
                }, {
                    "description": "The position of top-left corner along the x-axis.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The position of top-left corner along the y-axis.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "Width of the rectangle.",
                    "name": "width",
                    "type": "number"
                }, {
                    "description": "Height of the rectangle.",
                    "name": "height",
                    "type": "number"
                }, {
                    "description": "The x-axis radius of each round corner. Cannot be greater than half the rectangle's width.",
                    "name": "rx",
                    "type": "number"
                }, {
                    "default": "rx",
                    "description": "The y-axis radius of each round corner. Cannot be greater than half the rectangle's height.",
                    "name": "ry",
                    "type": "number"
                }, {
                    "default": "nil",
                    "description": "The number of segments used for drawing the round corners. A default amount will be chosen if no number is given.",
                    "name": "segments",
                    "type": "number"
                }],
                "description": "Draws a rectangle with rounded corners."
            }]
        }, {
            "description": "Resets the current graphics settings.\n\nCalling reset makes the current drawing color white, the current background color black, resets any active Canvas or Shader, and removes any scissor settings. It sets the BlendMode to alpha. It also sets both the point and line drawing modes to smooth and their sizes to 1.0.",
            "name": "reset",
            "variants": [[]]
        }, {
            "description": "Rotates the coordinate system in two dimensions.\n\nCalling this function affects all future drawing operations by rotating the coordinate system around the origin by the given amount of radians. This change lasts until love.draw exits.",
            "name": "rotate",
            "variants": [{
                "arguments": [{
                    "description": "The amount to rotate the coordinate system in radians.",
                    "name": "angle",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Scales the coordinate system in two dimensions.\n\nBy default the coordinate system in LÖVE corresponds to the display pixels in horizontal and vertical directions one-to-one, and the x-axis increases towards the right while the y-axis increases downwards. Scaling the coordinate system changes this relation.\n\nAfter scaling by sx and sy, all coordinates are treated as if they were multiplied by sx and sy. Every result of a drawing operation is also correspondingly scaled, so scaling by (2, 2) for example would mean making everything twice as large in both x- and y-directions. Scaling by a negative value flips the coordinate system in the corresponding direction, which also means everything will be drawn flipped or upside down, or both. Scaling by zero is not a useful operation.\n\nScale and translate are not commutative operations, therefore, calling them in different orders will change the outcome.\n\nScaling lasts until love.draw exits.",
            "name": "scale",
            "variants": [{
                "arguments": [{
                    "description": "The scaling in the direction of the x-axis.",
                    "name": "sx",
                    "type": "number"
                }, {
                    "default": "sx",
                    "description": "The scaling in the direction of the y-axis. If omitted, it defaults to same as parameter sx.",
                    "name": "sy",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Sets the current screen to be renderer. Used internally, do not call this.",
            "name": "setActiveScreen",
            "variants": [{
                "arguments": [{
                    "description": "The name of the screen to set",
                    "name": "screen",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Sets the background color.",
            "name": "setBackgroundColor",
            "variants": [{
                "arguments": [{
                    "description": "The red component (0-255).",
                    "name": "r",
                    "type": "number"
                }, {
                    "description": "The green component (0-255).",
                    "name": "g",
                    "type": "number"
                }, {
                    "description": "The blue component (0-255).",
                    "name": "b",
                    "type": "number"
                }, {
                    "default": "255",
                    "description": "The alpha component (0-255).",
                    "name": "a",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "A numerical indexed table with the red, green and blue values as numbers. Alpha is 255 if it is not in the table",
                    "name": "rgba",
                    "type": "table"
                }]
            }]
        }, {
            "description": "Sets the blending mode.",
            "name": "setBlendMode",
            "variants": [{
                "arguments": [{
                    "description": "The blend mode to use.",
                    "name": "mode",
                    "type": "BlendMode"
                }]
            }, {
                "arguments": [{
                    "description": "The blend mode to use.",
                    "name": "mode",
                    "type": "BlendMode"
                }, {
                    "default": "\"alphamultiply\"",
                    "description": "What to do with the alpha of drawn objects when blending.",
                    "name": "alphamode",
                    "type": "BlendAlphaMode"
                }]
            }]
        }, {
            "description": "Captures drawing operations to a Canvas.",
            "name": "setCanvas",
            "variants": [{
                "arguments": [{
                    "description": "A render target.",
                    "name": "canvas",
                    "type": "Canvas"
                }, {
                    "description": "Additional render targets.",
                    "name": "...",
                    "type": "Canvas"
                }],
                "description": "Sets the render target to a specified Canvas. All drawing operations until the next love.graphics.setCanvas call will be redirected to the Canvas and not shown on the screen."
            }, {
                "description": "Resets the render target to the screen, i.e. re-enables drawing to the screen."
            }, {
                "arguments": [{
                    "description": "The first render target.",
                    "name": "canvas1",
                    "type": "Canvas"
                }, {
                    "description": "The second render target.",
                    "name": "canvas2",
                    "type": "Canvas"
                }, {
                    "description": "More canvases.",
                    "name": "...",
                    "type": "Canvas"
                }],
                "description": "Sets the render target to multiple simultaneous Canvases. All drawing operations until the next love.graphics.setCanvas call will be redirected to the specified canvases and not shown on the screen."
            }]
        }, {
            "description": "Sets the color used for drawing.",
            "name": "setColor",
            "variants": [{
                "arguments": [{
                    "description": "The amount of red.",
                    "name": "red",
                    "type": "number"
                }, {
                    "description": "The amount of green.",
                    "name": "green",
                    "type": "number"
                }, {
                    "description": "The amount of blue.",
                    "name": "blue",
                    "type": "number"
                }, {
                    "description": "The amount of alpha. The alpha value will be applied to all subsequent draw operations, even the drawing of an image.",
                    "name": "alpha",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "A numerical indexed table with the red, green, blue and alpha values as numbers. The alpha is optional and defaults to 255 if it is left out.",
                    "name": "rgba",
                    "type": "table"
                }]
            }]
        }, {
            "description": "Sets the color mask. Enables or disables specific color components when rendering and clearing the screen. For example, if red is set to false, no further changes will be made to the red component of any pixels.\n\nEnables all color components when called without arguments.",
            "name": "setColorMask",
            "variants": [{
                "arguments": [{
                    "description": "Render red component.",
                    "name": "red",
                    "type": "boolean"
                }, {
                    "description": "Render green component.",
                    "name": "green",
                    "type": "boolean"
                }, {
                    "description": "Render blue component.",
                    "name": "blue",
                    "type": "boolean"
                }, {
                    "description": "Render alpha component.",
                    "name": "alpha",
                    "type": "boolean"
                }],
                "description": "Enables color masking for the specified color components."
            }, {
                "description": "Disables color masking."
            }]
        }, {
            "description": "Sets the default scaling filters used with Images, Canvases, and Fonts.\n\nThis function does not apply retroactively to loaded images.",
            "name": "setDefaultFilter",
            "variants": [{
                "arguments": [{
                    "description": "Filter mode used when scaling the image down.",
                    "name": "min",
                    "type": "FilterMode"
                }, {
                    "default": "min",
                    "description": "Filter mode used when scaling the image up.",
                    "name": "mag",
                    "type": "FilterMode"
                }, {
                    "default": "1",
                    "description": "Maximum amount of Anisotropic Filtering used.",
                    "name": "anisotropy",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Set an already-loaded Font as the current font or create and load a new one from the file and size.\n\nIt's recommended that Font objects are created with love.graphics.newFont in the loading stage and then passed to this function in the drawing stage.",
            "name": "setFont",
            "variants": [{
                "arguments": [{
                    "description": "The Font object to use.",
                    "name": "font",
                    "type": "Font"
                }]
            }]
        }, {
            "description": "Sets the line join style.",
            "name": "setLineJoin",
            "variants": [{
                "arguments": [{
                    "description": "The LineJoin to use.",
                    "name": "join",
                    "type": "LineJoin"
                }]
            }]
        }, {
            "description": "Sets the line style.",
            "name": "setLineStyle",
            "variants": [{
                "arguments": [{
                    "description": "The LineStyle to use.",
                    "name": "style",
                    "type": "LineStyle"
                }]
            }]
        }, {
            "description": "Sets the line width.",
            "name": "setLineWidth",
            "variants": [{
                "arguments": [{
                    "description": "The width of the line.",
                    "name": "width",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Creates and sets a new font.",
            "name": "setNewFont",
            "variants": [{
                "arguments": [{
                    "description": "The path and name of the file with the font.",
                    "name": "filename",
                    "type": "string"
                }, {
                    "default": "12",
                    "description": "The size of the font.",
                    "name": "size",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new font.",
                    "name": "font",
                    "type": "Font"
                }]
            }, {
                "arguments": [{
                    "description": "A File with the font.",
                    "name": "file",
                    "type": "File"
                }, {
                    "default": "12",
                    "description": "The size of the font.",
                    "name": "size",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new font.",
                    "name": "font",
                    "type": "Font"
                }]
            }, {
                "arguments": [{
                    "description": "A Data with the font.",
                    "name": "data",
                    "type": "Data"
                }, {
                    "default": "12",
                    "description": "The size of the font.",
                    "name": "size",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new font.",
                    "name": "font",
                    "type": "Font"
                }]
            }]
        }, {
            "description": "Sets the point size.",
            "name": "setPointSize",
            "variants": [{
                "arguments": [{
                    "description": "The new point size.",
                    "name": "size",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Sets or disables scissor.\n\nThe scissor limits the drawing area to a specified rectangle. This affects all graphics calls, including love.graphics.clear.",
            "name": "setScissor",
            "variants": [{
                "arguments": [{
                    "description": "The X coordinate of upper left corner.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The Y coordinate of upper left corner.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "The width of clipping rectangle.",
                    "name": "width",
                    "type": "number"
                }, {
                    "description": "The height of clipping rectangle.",
                    "name": "height",
                    "type": "number"
                }],
                "description": "Limits the drawing area to a specified rectangle."
            }, {
                "description": "Disables scissor."
            }]
        }, {
            "description": "Sets whether Wide Mode is enabled. Nintendo 3DS only",
            "name": "setWide",
            "variants": [{
                "arguments": [{
                    "description": "Whether to enable or disable Wide Mode",
                    "name": "wide",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Sets whether Stereoscopic 3D is enabled. Nintendo 3DS only",
            "name": "set3D",
            "variants": [{
                "arguments": [{
                    "description": "Whether to enable or disable Stereoscopic 3D",
                    "name": "enabled",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Shears the coordinate system.",
            "name": "shear",
            "variants": [{
                "arguments": [{
                    "description": "The shear factor on the x-axis.",
                    "name": "kx",
                    "type": "number"
                }, {
                    "description": "The shear factor on the y-axis.",
                    "name": "ky",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Translates the coordinate system in two dimensions.\n\nWhen this function is called with two numbers, dx, and dy, all the following drawing operations take effect as if their x and y coordinates were x+dx and y+dy.\n\nScale and translate are not commutative operations, therefore, calling them in different orders will change the outcome.\n\nThis change lasts until love.graphics.clear is called (which is called automatically before love.draw in the default love.run function), or a love.graphics.pop reverts to a previous coordinate system state.\n\nTranslating using whole numbers will prevent tearing/blurring of images and fonts draw after translating.",
            "name": "translate",
            "variants": [{
                "arguments": [{
                    "description": "The translation relative to the x-axis.",
                    "name": "dx",
                    "type": "number"
                }, {
                    "description": "The translation relative to the y-axis.",
                    "name": "dy",
                    "type": "number"
                }]
            }]
        }],
        "name": "graphics",
        "types": [{
            "constructors": ["newCanvas"],
            "description": "A Canvas is used for off-screen rendering. Think of it as an invisible screen that you can draw to, but that will not be visible until you draw it to the actual visible screen. It is also known as \"render to texture\".\n\nBy drawing things that do not change position often (such as background items) to the Canvas, and then drawing the entire Canvas instead of each item, you can reduce the number of draw operations performed each frame.\n\nIn versions prior to 0.10.0, not all graphics cards that LÖVE supported could use Canvases. love.graphics.isSupported(\"canvas\") could be used to check for support at runtime.",
            "functions": [{
                "description": "Gets the width and height of the Canvas.",
                "name": "getDimensions",
                "variants": [{
                    "returns": [{
                        "description": "The width of the Canvas, in pixels.",
                        "name": "width",
                        "type": "number"
                    }, {
                        "description": "The height of the Canvas, in pixels.",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the filter mode of the Canvas.",
                "name": "getFilter",
                "variants": [{
                    "returns": [{
                        "description": "Filter mode used when minifying the canvas.",
                        "name": "min",
                        "type": "FilterMode"
                    }, {
                        "description": "Filter mode used when magnifying the canvas.",
                        "name": "mag",
                        "type": "FilterMode"
                    }, {
                        "description": "Maximum amount of anisotropic filtering used.",
                        "name": "anisotropy",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the texture format of the Canvas.",
                "name": "getFormat",
                "variants": [{
                    "returns": [{
                        "description": "The format of the Canvas.",
                        "name": "format",
                        "type": "CanvasFormat"
                    }]
                }]
            }, {
                "description": "Gets the height of the Canvas.",
                "name": "getHeight",
                "variants": [{
                    "returns": [{
                        "description": "The height of the Canvas, in pixels.",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the number of multisample antialiasing (MSAA) samples used when drawing to the Canvas.\n\nThis may be different than the number used as an argument to love.graphics.newCanvas if the system running LÖVE doesn't support that number.",
                "name": "getMSAA",
                "variants": [{
                    "returns": [{
                        "description": "The number of multisample antialiasing samples used by the canvas when drawing to it.",
                        "name": "samples",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the width of the Canvas.",
                "name": "getWidth",
                "variants": [{
                    "returns": [{
                        "description": "The width of the Canvas, in pixels.",
                        "name": "width",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the wrapping properties of a Canvas.\n\nThis function returns the currently set horizontal and vertical wrapping modes for the Canvas.",
                "name": "getWrap",
                "variants": [{
                    "returns": [{
                        "description": "Horizontal wrapping mode of the Canvas.",
                        "name": "horizontal",
                        "type": "WrapMode"
                    }, {
                        "description": "Vertical wrapping mode of the Canvas.",
                        "name": "vertical",
                        "type": "WrapMode"
                    }]
                }]
            }, {
                "description": "Generates ImageData from the contents of the Canvas.",
                "name": "newImageData",
                "variants": [{
                    "returns": [{
                        "description": "The image data stored in the Canvas.",
                        "name": "data",
                        "type": "ImageData"
                    }]
                }, {
                    "arguments": [{
                        "description": "The x-axis of the top-left corner of the area within the Canvas to capture.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y-axis of the top-left corner of the area within the Canvas to capture.",
                        "name": "y",
                        "type": "number"
                    }, {
                        "description": "The width of the area within the Canvas to capture.",
                        "name": "width",
                        "type": "number"
                    }, {
                        "description": "The height of the area within the Canvas to capture.",
                        "name": "height",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The new ImageData made from the Canvas' contents.",
                        "name": "data",
                        "type": "ImageData"
                    }]
                }]
            }, {
                "description": "Render to the Canvas using a function.",
                "name": "renderTo",
                "variants": [{
                    "arguments": [{
                        "description": "A function performing drawing operations.",
                        "name": "func",
                        "type": "function"
                    }]
                }]
            }, {
                "description": "Sets the filter of the Canvas.",
                "name": "setFilter",
                "variants": [{
                    "arguments": [{
                        "description": "How to scale a canvas down.",
                        "name": "min",
                        "type": "FilterMode"
                    }, {
                        "default": "min",
                        "description": "How to scale a canvas up.",
                        "name": "mag",
                        "type": "FilterMode"
                    }, {
                        "default": "1",
                        "description": "Maximum amount of anisotropic filtering used.",
                        "name": "anisotropy",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the wrapping properties of a Canvas.\n\nThis function sets the way the edges of a Canvas are treated if it is scaled or rotated. If the WrapMode is set to \"clamp\", the edge will not be interpolated. If set to \"repeat\", the edge will be interpolated with the pixels on the opposing side of the framebuffer.",
                "name": "setWrap",
                "variants": [{
                    "arguments": [{
                        "description": "Horizontal wrapping mode of the Canvas.",
                        "name": "horizontal",
                        "type": "WrapMode"
                    }, {
                        "default": "horizontal",
                        "description": "Vertical wrapping mode of the Canvas.",
                        "name": "vertical",
                        "type": "WrapMode"
                    }]
                }]
            }],
            "name": "Canvas",
            "supertypes": ["Object", "Drawable", "Texture"]
        }, {
            "constructors": ["newFont", "newImageFont", "setNewFont"],
            "description": "Defines the shape of characters than can be drawn onto the screen.",
            "functions": [{
                "description": "Gets the ascent of the Font. The ascent spans the distance between the baseline and the top of the glyph that reaches farthest from the baseline.",
                "name": "getAscent",
                "variants": [{
                    "returns": [{
                        "description": "The ascent of the Font in pixels.",
                        "name": "ascent",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the baseline of the Font. Most scripts share the notion of a baseline: an imaginary horizontal line on which characters rest. In some scripts, parts of glyphs lie below the baseline.",
                "name": "getBaseline",
                "variants": [{
                    "returns": [{
                        "description": "The baseline of the Font in pixels.",
                        "name": "baseline",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the descent of the Font. The descent spans the distance between the baseline and the lowest descending glyph in a typeface.",
                "name": "getDescent",
                "variants": [{
                    "returns": [{
                        "description": "The descent of the Font in pixels.",
                        "name": "descent",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the filter mode for a font.",
                "name": "getFilter",
                "variants": [{
                    "returns": [{
                        "description": "Filter mode used when minifying the font.",
                        "name": "min",
                        "type": "FilterMode"
                    }, {
                        "description": "Filter mode used when magnifying the font.",
                        "name": "mag",
                        "type": "FilterMode"
                    }, {
                        "description": "Maximum amount of anisotropic filtering used.",
                        "name": "anisotropy",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the height of the Font. The height of the font is the size including any spacing; the height which it will need.",
                "name": "getHeight",
                "variants": [{
                    "returns": [{
                        "description": "The height of the Font in pixels.",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the line height. This will be the value previously set by Font:setLineHeight, or 1.0 by default.",
                "name": "getLineHeight",
                "variants": [{
                    "returns": [{
                        "description": "The current line height.",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Determines the horizontal size a line of text needs. Does not support line-breaks.",
                "name": "getWidth",
                "variants": [{
                    "arguments": [{
                        "description": "A line of text.",
                        "name": "line",
                        "type": "string"
                    }],
                    "returns": [{
                        "description": "The width of the line.",
                        "name": "width",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets formatting information for text, given a wrap limit.\n\nThis function accounts for newlines correctly (i.e. '\\n').",
                "name": "getWrap",
                "variants": [{
                    "arguments": [{
                        "description": "The text that will be wrapped.",
                        "name": "text",
                        "type": "string"
                    }, {
                        "description": "The maximum width in pixels of each line that text is allowed before wrapping.",
                        "name": "wraplimit",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The maximum width of the wrapped text.",
                        "name": "width",
                        "type": "number"
                    }, {
                        "description": "A sequence containing each line of text that was wrapped.",
                        "name": "wrappedtext",
                        "type": "table"
                    }]
                }]
            }, {
                "description": "Gets whether the font can render a particular character.",
                "name": "hasGlyphs",
                "variants": [{
                    "arguments": [{
                        "description": "A unicode character.",
                        "name": "character",
                        "type": "string"
                    }],
                    "returns": [{
                        "description": "Whether the font can render the glyph represented by the character.",
                        "name": "hasglyph",
                        "type": "boolean"
                    }]
                }, {
                    "arguments": [{
                        "description": "A unicode codepoint number.",
                        "name": "codepoint",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "Whether the font can render the glyph represented by the codepoint number.",
                        "name": "hasglyph",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Sets the fallback fonts. When the Font doesn't contain a glyph, it will substitute the glyph from the next subsequent fallback Fonts. This is akin to setting a \"font stack\" in Cascading Style Sheets (CSS).",
                "name": "setFallbacks",
                "variants": [{
                    "arguments": [{
                        "description": "The first fallback Font to use.",
                        "name": "fallbackfont1",
                        "type": "Font"
                    }, {
                        "description": "Additional fallback Fonts.",
                        "name": "...",
                        "type": "Font"
                    }]
                }]
            }, {
                "description": "Sets the filter mode for a font.",
                "name": "setFilter",
                "variants": [{
                    "arguments": [{
                        "description": "How to scale a font down.",
                        "name": "min",
                        "type": "FilterMode"
                    }, {
                        "default": "min",
                        "description": "How to scale a font up.",
                        "name": "mag",
                        "type": "FilterMode"
                    }, {
                        "default": "1",
                        "description": "Maximum amount of anisotropic filtering used.",
                        "name": "anisotropy",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the line height. When rendering the font in lines the actual height will be determined by the line height multiplied by the height of the font. The default is 1.0.",
                "name": "setLineHeight",
                "variants": [{
                    "arguments": [{
                        "description": "The new line height.",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }],
            "name": "Font",
            "supertypes": ["Object"]
        }, {
            "constructors": ["newImage"],
            "description": "Drawable image type.",
            "functions": [{
                "description": "Gets the original ImageData or CompressedImageData used to create the Image.\n\nAll Images keep a reference to the Data that was used to create the Image. The Data is used to refresh the Image when love.window.setMode or Image:refresh is called.",
                "name": "getData",
                "variants": [{
                    "returns": [{
                        "description": "The original ImageData used to create the Image, if the image is not compressed.",
                        "name": "data",
                        "type": "ImageData"
                    }]
                }, {
                    "returns": [{
                        "description": "The original CompressedImageData used to create the Image, if the image is compressed.",
                        "name": "data",
                        "type": "CompressedImageData"
                    }]
                }]
            }, {
                "description": "Gets the width and height of the Image.",
                "name": "getDimensions",
                "variants": [{
                    "returns": [{
                        "description": "The width of the Image, in pixels.",
                        "name": "width",
                        "type": "number"
                    }, {
                        "description": "The height of the Image, in pixels.",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the filter mode for an image.",
                "name": "getFilter",
                "variants": [{
                    "returns": [{
                        "description": "Filter mode used when minifying the image.",
                        "name": "min",
                        "type": "FilterMode"
                    }, {
                        "description": "Filter mode used when magnifying the image.",
                        "name": "mag",
                        "type": "FilterMode"
                    }]
                }]
            }, {
                "description": "Gets the flags used when the image was created.",
                "name": "getFlags",
                "variants": [{
                    "returns": [{
                        "description": "A table with ImageFlag keys.",
                        "name": "flags",
                        "type": "table"
                    }]
                }]
            }, {
                "description": "Gets the height of the Image.",
                "name": "getHeight",
                "variants": [{
                    "returns": [{
                        "description": "The height of the Image, in pixels.",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the mipmap filter mode for an Image.",
                "name": "getMipmapFilter",
                "variants": [{
                    "returns": [{
                        "description": "The filter mode used in between mipmap levels. nil if mipmap filtering is not enabled.",
                        "name": "mode",
                        "type": "FilterMode"
                    }, {
                        "description": "Value used to determine whether the image should use more or less detailed mipmap levels than normal when drawing.",
                        "name": "sharpness",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the width of the Image.",
                "name": "getWidth",
                "variants": [{
                    "returns": [{
                        "description": "The width of the Image, in pixels.",
                        "name": "width",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the wrapping properties of an Image.\n\nThis function returns the currently set horizontal and vertical wrapping modes for the image.",
                "name": "getWrap",
                "variants": [{
                    "returns": [{
                        "description": "Horizontal wrapping mode of the image.",
                        "name": "horizontal",
                        "type": "WrapMode"
                    }, {
                        "description": "Vertical wrapping mode of the image.",
                        "name": "vertical",
                        "type": "WrapMode"
                    }]
                }]
            }, {
                "description": "Reloads the Image's contents from the ImageData or CompressedImageData used to create the image.",
                "name": "refresh",
                "variants": [[], {
                    "arguments": [{
                        "description": "The x-axis of the top-left corner of the area within the Image to reload.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y-axis of the top-left corner of the area within the Image to reload.",
                        "name": "y",
                        "type": "number"
                    }, {
                        "description": "The width of the area within the Image to reload.",
                        "name": "width",
                        "type": "number"
                    }, {
                        "description": "The height of the area within the Image to reload.",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the filter mode for an image.",
                "name": "setFilter",
                "variants": [{
                    "arguments": [{
                        "description": "How to scale an image down.",
                        "name": "min",
                        "type": "FilterMode"
                    }, {
                        "default": "min",
                        "description": "How to scale an image up.",
                        "name": "mag",
                        "type": "FilterMode"
                    }]
                }]
            }, {
                "description": "Sets the mipmap filter mode for an Image.\n\nMipmapping is useful when drawing an image at a reduced scale. It can improve performance and reduce aliasing issues.\n\nIn 0.10.0 and newer, the Image must be created with the mipmaps flag enabled for the mipmap filter to have any effect.",
                "name": "setMipmapFilter",
                "variants": [{
                    "arguments": [{
                        "description": "The filter mode to use in between mipmap levels. \"nearest\" will often give better performance.",
                        "name": "filtermode",
                        "type": "FilterMode"
                    }, {
                        "default": "0",
                        "description": "A positive sharpness value makes the image use a more detailed mipmap level when drawing, at the expense of performance. A negative value does the reverse.",
                        "name": "sharpness",
                        "type": "number"
                    }]
                }, {
                    "description": "Disables mipmap filtering."
                }]
            }, {
                "description": "Sets the wrapping properties of an Image.\n\nThis function sets the way an Image is repeated when it is drawn with a Quad that is larger than the image's extent. An image may be clamped or set to repeat in both horizontal and vertical directions. Clamped images appear only once, but repeated ones repeat as many times as there is room in the Quad.\n\nIf you use a Quad that is larger than the image extent and do not use repeated tiling, there may be an unwanted visual effect of the image stretching all the way to fill the Quad. If this is the case, setting Image:getWrap(\"repeat\", \"repeat\") for all the images to be repeated, and using Quad of appropriate size will result in the best visual appearance.",
                "name": "setWrap",
                "variants": [{
                    "arguments": [{
                        "description": "Horizontal wrapping mode of the image.",
                        "name": "horizontal",
                        "type": "WrapMode"
                    }, {
                        "default": "horizontal",
                        "description": "Vertical wrapping mode of the image.",
                        "name": "vertical",
                        "type": "WrapMode"
                    }]
                }]
            }],
            "name": "Image",
            "supertypes": ["Object", "Drawable", "Texture"]
        }, {
            "constructors": ["newParticleSystem"],
            "description": "Used to create cool effects, like fire. The particle systems are created and drawn on the screen using functions in love.graphics. They also need to be updated in the update(dt) callback for you to see any changes in the particles emitted.",
            "functions": [{
                "description": "Creates an identical copy of the ParticleSystem in the stopped state.\n\nCloned ParticleSystem inherit all the set-able state of the original ParticleSystem, but they are initialized stopped.",
                "name": "clone",
                "variants": [{
                    "returns": [{
                        "description": "The new identical copy of this ParticleSystem.",
                        "name": "particlesystem",
                        "type": "ParticleSystem"
                    }]
                }]
            }, {
                "description": "Emits a burst of particles from the particle emitter.",
                "name": "emit",
                "variants": [{
                    "arguments": [{
                        "description": "The amount of particles to emit. The number of emitted particles will be truncated if the particle system's max buffer size is reached.",
                        "name": "numparticles",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the amount of particles that are currently in the system.",
                "name": "getCount",
                "variants": [{
                    "returns": [{
                        "description": "The current number of live particles.",
                        "name": "count",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the area-based spawn parameters for the particles.",
                "name": "getAreaSpread",
                "variants": [{
                    "returns": [{
                        "description": "The type of distribution for new particles.",
                        "name": "distribution",
                        "type": "AreaSpreadDistribution"
                    }, {
                        "description": "The maximum spawn distance from the emitter along the x-axis for uniform distribution, or the standard deviation along the x-axis for normal distribution.",
                        "name": "dx",
                        "type": "number"
                    }, {
                        "description": "The maximum spawn distance from the emitter along the y-axis for uniform distribution, or the standard deviation along the y-axis for normal distribution.",
                        "name": "dy",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the size of the buffer (the max allowed amount of particles in the system).",
                "name": "getBufferSize",
                "variants": [{
                    "returns": [{
                        "description": "The buffer size.",
                        "name": "buffer",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets a series of colors to apply to the particle sprite. The particle system will interpolate between each color evenly over the particle's lifetime. Color modulation needs to be activated for this function to have any effect.\n\nArguments are passed in groups of four, representing the components of the desired RGBA value. At least one color must be specified. A maximum of eight may be used.",
                "name": "getColors",
                "variants": [{
                    "returns": [{
                        "description": "First color, red component (0-255).",
                        "name": "r1",
                        "type": "number"
                    }, {
                        "description": "First color, green component (0-255).",
                        "name": "g1",
                        "type": "number"
                    }, {
                        "description": "First color, blue component (0-255).",
                        "name": "b1",
                        "type": "number"
                    }, {
                        "description": "First color, alpha component (0-255).",
                        "name": "a1",
                        "type": "number"
                    }, {
                        "description": "Second color, red component (0-255).",
                        "name": "r2",
                        "type": "number"
                    }, {
                        "description": "Second color, green component (0-255).",
                        "name": "g2",
                        "type": "number"
                    }, {
                        "description": "Second color, blue component (0-255).",
                        "name": "b2",
                        "type": "number"
                    }, {
                        "description": "Second color, alpha component (0-255).",
                        "name": "a2",
                        "type": "number"
                    }, {
                        "description": "Etc.",
                        "name": "...",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the direction the particles will be emitted in.",
                "name": "getDirection",
                "variants": [{
                    "returns": [{
                        "description": "The direction of the particles (in radians).",
                        "name": "direction",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the amount of particles emitted per second.",
                "name": "getEmissionRate",
                "variants": [{
                    "returns": [{
                        "description": "The amount of particles per second.",
                        "name": "rate",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the mode to use when the ParticleSystem adds new particles.",
                "name": "getInsertMode",
                "variants": [{
                    "returns": [{
                        "description": "The mode to use when the ParticleSystem adds new particles.",
                        "name": "mode",
                        "type": "ParticleInsertMode"
                    }]
                }]
            }, {
                "description": "Gets the linear acceleration (acceleration along the x and y axes) for particles.\n\nEvery particle created will accelerate along the x and y axes between xmin,ymin and xmax,ymax.",
                "name": "getLinearAcceleration",
                "variants": [{
                    "returns": [{
                        "description": "The minimum acceleration along the x axis.",
                        "name": "xmin",
                        "type": "number"
                    }, {
                        "description": "The minimum acceleration along the y axis.",
                        "name": "ymin",
                        "type": "number"
                    }, {
                        "description": "The maximum acceleration along the x axis.",
                        "name": "xmax",
                        "type": "number"
                    }, {
                        "description": "The maximum acceleration along the y axis.",
                        "name": "ymax",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the amount of linear damping (constant deceleration) for particles.",
                "name": "getLinearDamping",
                "variants": [{
                    "returns": [{
                        "description": "The minimum amount of linear damping applied to particles.",
                        "name": "min",
                        "type": "number"
                    }, {
                        "description": "The maximum amount of linear damping applied to particles.",
                        "name": "max",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets how long the particle system should emit particles (if -1 then it emits particles forever).",
                "name": "getEmitterLifetime",
                "variants": [{
                    "returns": [{
                        "description": "The lifetime of the emitter (in seconds).",
                        "name": "life",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the offget position which the particle sprite is rotated around. If this function is not used, the particles rotate around their center.",
                "name": "getOffset",
                "variants": [{
                    "returns": [{
                        "description": "The x coordinate of the rotation offget.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y coordinate of the rotation offget.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the life of the particles.",
                "name": "getParticleLifetime",
                "variants": [{
                    "returns": [{
                        "description": "The minimum life of the particles (seconds).",
                        "name": "min",
                        "type": "number"
                    }, {
                        "default": "min",
                        "description": "The maximum life of the particles (seconds).",
                        "name": "max",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the position of the emitter.",
                "name": "getPosition",
                "variants": [{
                    "returns": [{
                        "description": "Position along x-axis.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "Position along y-axis.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the radial acceleration (away from the emitter).",
                "name": "getRadialAcceleration",
                "variants": [{
                    "returns": [{
                        "description": "The minimum acceleration.",
                        "name": "min",
                        "type": "number"
                    }, {
                        "default": "min",
                        "description": "The maximum acceleration.",
                        "name": "max",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the rotation of the image upon particle creation (in radians).",
                "name": "getRotation",
                "variants": [{
                    "returns": [{
                        "description": "The minimum initial angle (radians).",
                        "name": "min",
                        "type": "number"
                    }, {
                        "default": "min",
                        "description": "The maximum initial angle (radians).",
                        "name": "max",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets a series of sizes by which to scale a particle sprite. 1.0 is normal size. The particle system will interpolate between each size evenly over the particle's lifetime.\n\nAt least one size must be specified. A maximum of eight may be used.",
                "name": "getSizes",
                "variants": [{
                    "returns": [{
                        "description": "The first size.",
                        "name": "size1",
                        "type": "number"
                    }, {
                        "description": "The second size.",
                        "name": "size2",
                        "type": "number"
                    }, {
                        "description": "Etc.",
                        "name": "...",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the degree of variation (0 meaning no variation and 1 meaning full variation between start and end).",
                "name": "getSizeVariation",
                "variants": [{
                    "returns": [{
                        "description": "The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).",
                        "name": "variation",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the speed of the particles.",
                "name": "getSpeed",
                "variants": [{
                    "returns": [{
                        "description": "The minimum linear speed of the particles.",
                        "name": "min",
                        "type": "number"
                    }, {
                        "default": "min",
                        "description": "The maximum linear speed of the particles.",
                        "name": "max",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the spin of the sprite.",
                "name": "getSpin",
                "variants": [{
                    "returns": [{
                        "description": "The minimum spin (radians per second).",
                        "name": "min",
                        "type": "number"
                    }, {
                        "default": "min",
                        "description": "The maximum spin (radians per second).",
                        "name": "max",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the degree of variation (0 meaning no variation and 1 meaning full variation between start and end).",
                "name": "getSpinVariation",
                "variants": [{
                    "returns": [{
                        "description": "The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).",
                        "name": "variation",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the amount of spread for the system.",
                "name": "getSpread",
                "variants": [{
                    "returns": [{
                        "description": "The amount of spread (radians).",
                        "name": "spread",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the Image or Canvas which is to be emitted.",
                "name": "getTexture",
                "variants": [{
                    "returns": [{
                        "description": "An Image or Canvas to use for the particle.",
                        "name": "texture",
                        "type": "Texture"
                    }]
                }]
            }, {
                "description": "Gets the tangential acceleration (acceleration perpendicular to the particle's direction).",
                "name": "getTangentialAcceleration",
                "variants": [{
                    "returns": [{
                        "description": "The minimum acceleration.",
                        "name": "min",
                        "type": "number"
                    }, {
                        "default": "min",
                        "description": "The maximum acceleration.",
                        "name": "max",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets whether particle angles and rotations are relative to their velocities. If enabled, particles are aligned to the angle of their velocities and rotate relative to that angle.",
                "name": "hasRelativeRotation",
                "variants": [{
                    "returns": [{
                        "description": "True if relative particle rotation is enabled, false if it's disabled.",
                        "name": "enabled",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Checks whether the particle system is actively emitting particles.",
                "name": "isActive",
                "variants": [{
                    "returns": [{
                        "description": "True if system is active, false otherwise.",
                        "name": "active",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Checks whether the particle system is paused.",
                "name": "isPaused",
                "variants": [{
                    "returns": [{
                        "description": "True if system is paused, false otherwise.",
                        "name": "paused",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Checks whether the particle system is stopped.",
                "name": "isStopped",
                "variants": [{
                    "returns": [{
                        "description": "True if system is stopped, false otherwise.",
                        "name": "stopped",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Moves the position of the emitter. This results in smoother particle spawning behaviour than if ParticleSystem:setPosition is used every frame.",
                "name": "moveTo",
                "variants": [{
                    "arguments": [{
                        "description": "Position along x-axis.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "Position along y-axis.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Pauses the particle emitter.",
                "name": "pause",
                "variants": [[]]
            }, {
                "description": "Resets the particle emitter, removing any existing particles and resetting the lifetime counter.",
                "name": "reset",
                "variants": [[]]
            }, {
                "description": "Sets area-based spawn parameters for the particles. Newly created particles will spawn in an area around the emitter based on the parameters to this function.",
                "name": "setAreaSpread",
                "variants": [{
                    "arguments": [{
                        "description": "The type of distribution for new particles.",
                        "name": "distribution",
                        "type": "AreaSpreadDistribution"
                    }, {
                        "description": "The maximum spawn distance from the emitter along the x-axis for uniform distribution, or the standard deviation along the x-axis for normal distribution.",
                        "name": "dx",
                        "type": "number"
                    }, {
                        "description": "The maximum spawn distance from the emitter along the y-axis for uniform distribution, or the standard deviation along the y-axis for normal distribution.",
                        "name": "dy",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the size of the buffer (the max allowed amount of particles in the system).",
                "name": "setBufferSize",
                "variants": [{
                    "arguments": [{
                        "description": "The buffer size.",
                        "name": "buffer",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets a series of colors to apply to the particle sprite. The particle system will interpolate between each color evenly over the particle's lifetime. Color modulation needs to be activated for this function to have any effect.\n\nArguments are passed in groups of four, representing the components of the desired RGBA value. At least one color must be specified. A maximum of eight may be used.",
                "name": "setColors",
                "variants": [{
                    "arguments": [{
                        "description": "First color, red component (0-255).",
                        "name": "r1",
                        "type": "number"
                    }, {
                        "description": "First color, green component (0-255).",
                        "name": "g1",
                        "type": "number"
                    }, {
                        "description": "First color, blue component (0-255).",
                        "name": "b1",
                        "type": "number"
                    }, {
                        "description": "First color, alpha component (0-255).",
                        "name": "a1",
                        "type": "number"
                    }, {
                        "description": "Second color, red component (0-255).",
                        "name": "r2",
                        "type": "number"
                    }, {
                        "description": "Second color, green component (0-255).",
                        "name": "g2",
                        "type": "number"
                    }, {
                        "description": "Second color, blue component (0-255).",
                        "name": "b2",
                        "type": "number"
                    }, {
                        "description": "Second color, alpha component (0-255).",
                        "name": "a2",
                        "type": "number"
                    }, {
                        "description": "Etc.",
                        "name": "...",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the direction the particles will be emitted in.",
                "name": "setDirection",
                "variants": [{
                    "arguments": [{
                        "description": "The direction of the particles (in radians).",
                        "name": "direction",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the amount of particles emitted per second.",
                "name": "setEmissionRate",
                "variants": [{
                    "arguments": [{
                        "description": "The amount of particles per second.",
                        "name": "rate",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets how long the particle system should emit particles (if -1 then it emits particles forever).",
                "name": "setEmitterLifetime",
                "variants": [{
                    "arguments": [{
                        "description": "The lifetime of the emitter (in seconds).",
                        "name": "life",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the mode to use when the ParticleSystem adds new particles.",
                "name": "setInsertMode",
                "variants": [{
                    "arguments": [{
                        "description": "The mode to use when the ParticleSystem adds new particles.",
                        "name": "mode",
                        "type": "ParticleInsertMode"
                    }]
                }]
            }, {
                "description": "Sets the linear acceleration (acceleration along the x and y axes) for particles.\n\nEvery particle created will accelerate along the x and y axes between xmin,ymin and xmax,ymax.",
                "name": "setLinearAcceleration",
                "variants": [{
                    "arguments": [{
                        "description": "The minimum acceleration along the x axis.",
                        "name": "xmin",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "The minimum acceleration along the y axis.",
                        "name": "ymin",
                        "type": "number"
                    }, {
                        "default": "xmin",
                        "description": "The maximum acceleration along the x axis.",
                        "name": "xmax",
                        "type": "number"
                    }, {
                        "default": "ymax",
                        "description": "The maximum acceleration along the y axis.",
                        "name": "ymax",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the amount of linear damping (constant deceleration) for particles.",
                "name": "setLinearDamping",
                "variants": [{
                    "arguments": [{
                        "description": "The minimum amount of linear damping applied to particles.",
                        "name": "min",
                        "type": "number"
                    }, {
                        "description": "The maximum amount of linear damping applied to particles.",
                        "name": "max",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Set the offset position which the particle sprite is rotated around. If this function is not used, the particles rotate around their center.",
                "name": "setOffset",
                "variants": [{
                    "arguments": [{
                        "description": "The x coordinate of the rotation offset.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y coordinate of the rotation offset.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the life of the particles.",
                "name": "setParticleLifetime",
                "variants": [{
                    "arguments": [{
                        "description": "The minimum life of the particles (seconds).",
                        "name": "min",
                        "type": "number"
                    }, {
                        "default": "min",
                        "description": "The maximum life of the particles (seconds).",
                        "name": "max",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the position of the emitter.",
                "name": "setPosition",
                "variants": [{
                    "arguments": [{
                        "description": "Position along x-axis.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "Position along y-axis.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets a series of Quads to use for the particle sprites. Particles will choose a Quad from the list based on the particle's current lifetime, allowing for the use of animated sprite sheets with ParticleSystems.",
                "name": "setQuads",
                "variants": [{
                    "arguments": [{
                        "description": "The first Quad to use.",
                        "name": "quad1",
                        "type": "Quad"
                    }, {
                        "description": "The second Quad to use.",
                        "name": "quad2",
                        "type": "Quad"
                    }]
                }]
            }, {
                "description": "Set the radial acceleration (away from the emitter).",
                "name": "setRadialAcceleration",
                "variants": [{
                    "arguments": [{
                        "description": "The minimum acceleration.",
                        "name": "min",
                        "type": "number"
                    }, {
                        "default": "min",
                        "description": "The maximum acceleration.",
                        "name": "max",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets whether particle angles and rotations are relative to their velocities. If enabled, particles are aligned to the angle of their velocities and rotate relative to that angle.",
                "name": "setRelativeRotation",
                "variants": [{
                    "arguments": [{
                        "description": "True to enable relative particle rotation, false to disable it.",
                        "name": "enable",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Sets the rotation of the image upon particle creation (in radians).",
                "name": "setRotation",
                "variants": [{
                    "arguments": [{
                        "description": "The minimum initial angle (radians).",
                        "name": "min",
                        "type": "number"
                    }, {
                        "default": "min",
                        "description": "The maximum initial angle (radians).",
                        "name": "max",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets a series of sizes by which to scale a particle sprite. 1.0 is normal size. The particle system will interpolate between each size evenly over the particle's lifetime.\n\nAt least one size must be specified. A maximum of eight may be used.",
                "name": "setSizes",
                "variants": [{
                    "arguments": [{
                        "description": "The first size.",
                        "name": "size1",
                        "type": "number"
                    }, {
                        "description": "The second size.",
                        "name": "size2",
                        "type": "number"
                    }, {
                        "description": "Etc.",
                        "name": "...",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the degree of variation (0 meaning no variation and 1 meaning full variation between start and end).",
                "name": "setSizeVariation",
                "variants": [{
                    "arguments": [{
                        "description": "The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).",
                        "name": "variation",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the speed of the particles.",
                "name": "setSpeed",
                "variants": [{
                    "arguments": [{
                        "description": "The minimum linear speed of the particles.",
                        "name": "min",
                        "type": "number"
                    }, {
                        "default": "min",
                        "description": "The maximum linear speed of the particles.",
                        "name": "max",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the spin of the sprite.",
                "name": "setSpin",
                "variants": [{
                    "arguments": [{
                        "description": "The minimum spin (radians per second).",
                        "name": "min",
                        "type": "number"
                    }, {
                        "default": "min",
                        "description": "The maximum spin (radians per second).",
                        "name": "max",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the degree of variation (0 meaning no variation and 1 meaning full variation between start and end).",
                "name": "setSpinVariation",
                "variants": [{
                    "arguments": [{
                        "description": "The degree of variation (0 meaning no variation and 1 meaning full variation between start and end).",
                        "name": "variation",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the amount of spread for the system.",
                "name": "setSpread",
                "variants": [{
                    "arguments": [{
                        "description": "The amount of spread (radians).",
                        "name": "spread",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the Image or Canvas which is to be emitted.",
                "name": "setTexture",
                "variants": [{
                    "arguments": [{
                        "description": "An Image or Canvas to use for the particle.",
                        "name": "texture",
                        "type": "Texture"
                    }]
                }]
            }, {
                "description": "Sets the tangential acceleration (acceleration perpendicular to the particle's direction).",
                "name": "setTangentialAcceleration",
                "variants": [{
                    "arguments": [{
                        "description": "The minimum acceleration.",
                        "name": "min",
                        "type": "number"
                    }, {
                        "default": "min",
                        "description": "The maximum acceleration.",
                        "name": "max",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Starts the particle emitter.",
                "name": "start",
                "variants": [[]]
            }, {
                "description": "Stops the particle emitter, resetting the lifetime counter.",
                "name": "stop",
                "variants": [[]]
            }, {
                "description": "Updates the particle system; moving, creating and killing particles.",
                "name": "update",
                "variants": [{
                    "arguments": [{
                        "description": "The time (seconds) since last frame.",
                        "name": "dt",
                        "type": "number"
                    }]
                }]
            }],
            "name": "ParticleSystem",
            "supertypes": ["Drawable", "Object"]
        }, {
            "constructors": ["newQuad"],
            "description": "A quadrilateral (a polygon with four sides and four corners) with texture coordinate information.\n\nQuads can be used to select part of a texture to draw. In this way, one large texture atlas can be loaded, and then split up into sub-images.",
            "functions": [{
                "description": "Gets reference texture dimensions initially specified in love.graphics.newQuad.",
                "name": "getTextureDimensions",
                "variants": [{
                    "returns": [{
                        "description": "The Texture width used by the Quad.",
                        "name": "sw",
                        "type": "number"
                    }, {
                        "description": "The Texture height used by the Quad.",
                        "name": "sh",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the current viewport of this Quad.",
                "name": "getViewport",
                "variants": [{
                    "returns": [{
                        "description": "The top-left corner along the x-axis.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The top-right corner along the y-axis.",
                        "name": "y",
                        "type": "number"
                    }, {
                        "description": "The width of the viewport.",
                        "name": "w",
                        "type": "number"
                    }, {
                        "description": "The height of the viewport.",
                        "name": "h",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the texture coordinates according to a viewport.",
                "name": "setViewport",
                "variants": [{
                    "returns": [{
                        "description": "The top-left corner along the x-axis.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The top-right corner along the y-axis.",
                        "name": "y",
                        "type": "number"
                    }, {
                        "description": "The width of the viewport.",
                        "name": "w",
                        "type": "number"
                    }, {
                        "description": "The height of the viewport.",
                        "name": "h",
                        "type": "number"
                    }]
                }]
            }],
            "name": "Quad",
            "supertypes": ["Object"]
        }, {
            "constructors": ["newText"],
            "description": "Drawable text.",
            "functions": [{
                "description": "Adds additional colored text to the Text object at the specified position.",
                "name": "add",
                "variants": [{
                    "arguments": [{
                        "description": "The text to add to the object.",
                        "name": "textstring",
                        "type": "string"
                    }, {
                        "description": "The position of the new text on the x-axis.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The position of the new text on the y-axis.",
                        "name": "y",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "The orientation of the new text in radians.",
                        "name": "angle",
                        "type": "number"
                    }, {
                        "default": "1",
                        "description": "Scale factor on the x-axis.",
                        "name": "sx",
                        "type": "number"
                    }, {
                        "default": "sx",
                        "description": "Scale factor on the y-axis.",
                        "name": "sy",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "Origin offset on the x-axis.",
                        "name": "ox",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "Origin offset on the y-axis.",
                        "name": "oy",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "Shearing / skew factor on the x-axis.",
                        "name": "kx",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "Shearing / skew factor on the y-axis.",
                        "name": "ky",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "An index number that can be used with Text:getWidth or Text:getHeight.",
                        "name": "index",
                        "type": "number"
                    }]
                }, {
                    "arguments": [{
                        "description": "A table containing colors and strings to use as the new text, in the form of { color1, string1, color2, string2, ... }.",
                        "name": "coloredtext",
                        "table": [{
                            "description": "A table containing red, green, blue, and optional alpha components to use as a color for the next string in the table, in the form of {red, green, blue, alpha}.",
                            "name": "color1",
                            "type": "table"
                        }, {
                            "description": "A string of text which has a color specified by the previous color.",
                            "name": "string1",
                            "type": "string"
                        }, {
                            "description": "A table containing red, green, blue, and optional alpha components to use as a color for the next string in the table, in the form of {red, green, blue, alpha}.",
                            "name": "color2",
                            "type": "table"
                        }, {
                            "description": "A string of text which has a color specified by the previous color.",
                            "name": "string2",
                            "type": "string"
                        }, {
                            "description": "Additional colors and strings.",
                            "name": "...",
                            "type": "tables and strings"
                        }],
                        "type": "table"
                    }, {
                        "description": "The position of the new text on the x-axis.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The position of the new text on the y-axis.",
                        "name": "y",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "The orientation of the new text in radians.",
                        "name": "angle",
                        "type": "number"
                    }, {
                        "default": "1",
                        "description": "Scale factor on the x-axis.",
                        "name": "sx",
                        "type": "number"
                    }, {
                        "default": "sx",
                        "description": "Scale factor on the y-axis.",
                        "name": "sy",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "Origin offset on the x-axis.",
                        "name": "ox",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "Origin offset on the y-axis.",
                        "name": "oy",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "Shearing / skew factor on the x-axis.",
                        "name": "kx",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "Shearing / skew factor on the y-axis.",
                        "name": "ky",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "An index number that can be used with Text:getWidth or Text:getHeight.",
                        "name": "index",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Adds additional formatted / colored text to the Text object at the specified position.",
                "name": "addf",
                "variants": [{
                    "arguments": [{
                        "description": "The text to add to the object.",
                        "name": "textstring",
                        "type": "string"
                    }, {
                        "description": "The maximum width in pixels of the text before it gets automatically wrapped to a new line.",
                        "name": "wraplimit",
                        "type": "number"
                    }, {
                        "description": "The alignment of the text.",
                        "name": "align",
                        "type": "AlignMode"
                    }, {
                        "description": "The position of the new text on the x-axis.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The position of the new text on the y-axis.",
                        "name": "y",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "The orientation of the object in radians.",
                        "name": "angle",
                        "type": "number"
                    }, {
                        "default": "1",
                        "description": "Scale factor on the x-axis.",
                        "name": "sx",
                        "type": "number"
                    }, {
                        "default": "sx",
                        "description": "Scale factor on the y-axis.",
                        "name": "sy",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "Origin offset on the x-axis.",
                        "name": "ox",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "Origin offset on the y-axis.",
                        "name": "oy",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "Shearing / skew factor on the x-axis.",
                        "name": "kx",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "Shearing / skew factor on the y-axis.",
                        "name": "ky",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "An index number that can be used with Text:getWidth or Text:getHeight.",
                        "name": "index",
                        "type": "number"
                    }]
                }, {
                    "arguments": [{
                        "description": "A table containing colors and strings to use as the new text, in the form of { color1, string1, color2, string2, ... }.",
                        "name": "coloredtext",
                        "table": [{
                            "description": "A table containing red, green, blue, and optional alpha components to use as a color for the next string in the table, in the form of {red, green, blue, alpha}.",
                            "name": "color1",
                            "type": "table"
                        }, {
                            "description": "A string of text which has a color specified by the previous color.",
                            "name": "string1",
                            "type": "string"
                        }, {
                            "description": "A table containing red, green, blue, and optional alpha components to use as a color for the next string in the table, in the form of {red, green, blue, alpha}.",
                            "name": "color2",
                            "type": "table"
                        }, {
                            "description": "A string of text which has a color specified by the previous color.",
                            "name": "string2",
                            "type": "string"
                        }, {
                            "description": "Additional colors and strings.",
                            "name": "...",
                            "type": "tables and strings"
                        }],
                        "type": "table"
                    }, {
                        "description": "The maximum width in pixels of the text before it gets automatically wrapped to a new line.",
                        "name": "wraplimit",
                        "type": "number"
                    }, {
                        "description": "The alignment of the text.",
                        "name": "align",
                        "type": "AlignMode"
                    }, {
                        "description": "The position of the new text on the x-axis.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The position of the new text on the y-axis.",
                        "name": "y",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "The orientation of the object in radians.",
                        "name": "angle",
                        "type": "number"
                    }, {
                        "default": "1",
                        "description": "Scale factor on the x-axis.",
                        "name": "sx",
                        "type": "number"
                    }, {
                        "default": "sx",
                        "description": "Scale factor on the y-axis.",
                        "name": "sy",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "Origin offset on the x-axis.",
                        "name": "ox",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "Origin offset on the y-axis.",
                        "name": "oy",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "Shearing / skew factor on the x-axis.",
                        "name": "kx",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "Shearing / skew factor on the y-axis.",
                        "name": "ky",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "An index number that can be used with Text:getWidth or Text:getHeight.",
                        "name": "index",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Clears the contents of the Text object.",
                "name": "clear",
                "variants": [[]]
            }, {
                "description": "Gets the width and height of the text in pixels.",
                "name": "getDimensions",
                "variants": [{
                    "returns": [{
                        "description": "The width of the text. If multiple sub-strings have been added with Text:add, the width of the last sub-string is returned.",
                        "name": "width",
                        "type": "number"
                    }, {
                        "description": "The height of the text. If multiple sub-strings have been added with Text:add, the height of the last sub-string is returned.",
                        "name": "height",
                        "type": "number"
                    }]
                }, {
                    "arguments": [{
                        "description": "An index number returned by Text:add or Text:addf.",
                        "name": "index",
                        "type": "number"
                    }],
                    "description": "Gets the width and height of a specific sub-string that was previously added to the Text object.",
                    "returns": [{
                        "description": "The width of the sub-string (before scaling and other transformations).",
                        "name": "width",
                        "type": "number"
                    }, {
                        "description": "The height of the sub-string (before scaling and other transformations).",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the Font used with the Text object.",
                "name": "getFont",
                "variants": [{
                    "returns": [{
                        "description": "The font used with this Text object.",
                        "name": "font",
                        "type": "Font"
                    }]
                }]
            }, {
                "description": "Gets the height of the text in pixels.",
                "name": "getHeight",
                "variants": [{
                    "returns": [{
                        "description": "The height of the text. If multiple sub-strings have been added with Text:add, the height of the last sub-string is returned.",
                        "name": "height",
                        "type": "number"
                    }]
                }, {
                    "arguments": [{
                        "description": "An index number returned by Text:add or Text:addf.",
                        "name": "index",
                        "type": "number"
                    }],
                    "description": "Gets the height of a specific sub-string that was previously added to the Text object.",
                    "returns": [{
                        "description": "The height of the sub-string (before scaling and other transformations).",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the width of the text in pixels.",
                "name": "getWidth",
                "variants": [{
                    "returns": [{
                        "description": "The width of the text. If multiple sub-strings have been added with Text:add, the width of the last sub-string is returned.",
                        "name": "width",
                        "type": "number"
                    }]
                }, {
                    "arguments": [{
                        "description": "An index number returned by Text:add or Text:addf.",
                        "name": "index",
                        "type": "number"
                    }],
                    "description": "Gets the width of a specific sub-string that was previously added to the Text object.",
                    "returns": [{
                        "description": "The width of the sub-string (before scaling and other transformations).",
                        "name": "width",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Replaces the contents of the Text object with a new unformatted string.",
                "name": "set",
                "variants": [{
                    "arguments": [{
                        "description": "The new string of text to use.",
                        "name": "textstring",
                        "type": "string"
                    }]
                }, {
                    "arguments": [{
                        "description": "A table containing colors and strings to use as the new text, in the form of { color1, string1, color2, string2, ... }.",
                        "name": "coloredtext",
                        "table": [{
                            "description": "A table containing red, green, blue, and optional alpha components to use as a color for the next string in the table, in the form of {red, green, blue, alpha}.",
                            "name": "color1",
                            "type": "table"
                        }, {
                            "description": "A string of text which has a color specified by the previous color.",
                            "name": "string1",
                            "type": "string"
                        }, {
                            "description": "A table containing red, green, blue, and optional alpha components to use as a color for the next string in the table, in the form of {red, green, blue, alpha}.",
                            "name": "color2",
                            "type": "table"
                        }, {
                            "description": "A string of text which has a color specified by the previous color.",
                            "name": "string2",
                            "type": "string"
                        }, {
                            "description": "Additional colors and strings.",
                            "name": "...",
                            "type": "tables and strings"
                        }],
                        "type": "table"
                    }]
                }, {
                    "description": "Clears the contents of the Text object."
                }]
            }, {
                "description": "Replaces the contents of the Text object with a new formatted string.",
                "name": "setf",
                "variants": [{
                    "arguments": [{
                        "description": "The new string of text to use.",
                        "name": "textstring",
                        "type": "string"
                    }, {
                        "description": "The maximum width in pixels of the text before it gets automatically wrapped to a new line.",
                        "name": "wraplimit",
                        "type": "number"
                    }, {
                        "default": "\"left\"",
                        "description": "The alignment of the text.",
                        "name": "align",
                        "type": "AlignMode"
                    }]
                }, {
                    "arguments": [{
                        "description": "A table containing colors and strings to use as the new text, in the form of { color1, string1, color2, string2, ... }.",
                        "name": "coloredtext",
                        "table": [{
                            "description": "A table containing red, green, blue, and optional alpha components to use as a color for the next string in the table, in the form of {red, green, blue, alpha}.",
                            "name": "color1",
                            "type": "table"
                        }, {
                            "description": "A string of text which has a color specified by the previous color.",
                            "name": "string1",
                            "type": "string"
                        }, {
                            "description": "A table containing red, green, blue, and optional alpha components to use as a color for the next string in the table, in the form of {red, green, blue, alpha}.",
                            "name": "color2",
                            "type": "table"
                        }, {
                            "description": "A string of text which has a color specified by the previous color.",
                            "name": "string2",
                            "type": "string"
                        }, {
                            "description": "Additional colors and strings.",
                            "name": "...",
                            "type": "tables and strings"
                        }],
                        "type": "table"
                    }, {
                        "description": "The maximum width in pixels of the text before it gets automatically wrapped to a new line.",
                        "name": "wraplimit",
                        "type": "number"
                    }, {
                        "default": "\"left\"",
                        "description": "The alignment of the text.",
                        "name": "align",
                        "type": "AlignMode"
                    }]
                }, {
                    "description": "Clears the contents of the Text object."
                }]
            }, {
                "description": "Replaces the Font used with the text.",
                "name": "setFont",
                "variants": [{
                    "arguments": [{
                        "description": "The new font to use with this Text object.",
                        "name": "font",
                        "type": "Font"
                    }]
                }]
            }],
            "name": "Text",
            "supertypes": ["Drawable", "Object"]
        }, {
            "constructors": [],
            "description": "Superclass for drawable objects which represent a texture. All Textures can be drawn with Quads. This is an abstract type that can't be created directly.",
            "functions": [],
            "name": "Texture",
            "subtypes": ["Canvas", "Image"],
            "supertypes": ["Drawable", "Object"]
        }, {
            "constructors": ["_newVideo"],
            "description": "A drawable video.",
            "functions": [{
                "description": "Gets the width and height of the Video in pixels.",
                "name": "getDimensions",
                "variants": [{
                    "returns": [{
                        "description": "The width of the Video.",
                        "name": "width",
                        "type": "number"
                    }, {
                        "description": "The height of the video.",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the scaling filters used when drawing the Video.",
                "name": "getFilter",
                "variants": [{
                    "returns": [{
                        "description": "The filter mode used when scaling the Video down.",
                        "name": "min",
                        "type": "FilterMode"
                    }, {
                        "description": "The filter mode used when scaling the Video up.",
                        "name": "mag",
                        "type": "FilterMode"
                    }, {
                        "default": "1",
                        "description": "Maximum amount of anisotropic filtering used.",
                        "name": "anisotropy",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the height of the Video in pixels.",
                "name": "getHeight",
                "variants": [{
                    "returns": [{
                        "description": "The height of the Video.",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the audio Source used for playing back the video's audio. May return nil if the video has no audio, or if Video:setSource is called with a nil argument.",
                "name": "getSource",
                "variants": [{
                    "returns": [{
                        "description": "The audio Source used for audio playback, or nil if the video has no audio.",
                        "name": "source",
                        "type": "Source"
                    }]
                }]
            }, {
                "description": "Gets the VideoStream object used for decoding and controlling the video.",
                "name": "getStream",
                "variants": [{
                    "returns": [{
                        "description": "The VideoStream used for decoding and controlling the video.",
                        "name": "stream",
                        "type": "VideoStream"
                    }]
                }]
            }, {
                "description": "Gets the width of the Video in pixels.",
                "name": "getWidth",
                "variants": [{
                    "returns": [{
                        "description": "The width of the Video.",
                        "name": "width",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets whether the Video is currently playing.",
                "name": "isPlaying",
                "variants": [{
                    "returns": [{
                        "description": "Whether the video is playing.",
                        "name": "playing",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Pauses the Video.",
                "name": "pause",
                "variants": [[]]
            }, {
                "description": "Starts playing the Video. In order for the video to appear onscreen it must be drawn with love.graphics.draw.",
                "name": "play",
                "variants": [[]]
            }, {
                "description": "Rewinds the Video to the beginning.",
                "name": "rewind",
                "variants": [[]]
            }, {
                "description": "Sets the current playback position of the Video.",
                "name": "seek",
                "variants": [{
                    "arguments": [{
                        "description": "The time in seconds since the beginning of the Video.",
                        "name": "offset",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the scaling filters used when drawing the Video.",
                "name": "setFilter",
                "variants": [{
                    "arguments": [{
                        "description": "The filter mode used when scaling the Video down.",
                        "name": "min",
                        "type": "FilterMode"
                    }, {
                        "description": "The filter mode used when scaling the Video up.",
                        "name": "mag",
                        "type": "FilterMode"
                    }, {
                        "default": "1",
                        "description": "Maximum amount of anisotropic filtering used.",
                        "name": "anisotropy",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the audio Source used for playing back the video's audio. The audio Source also controls playback speed and synchronization.",
                "name": "setSource",
                "variants": [{
                    "arguments": [{
                        "default": "nil",
                        "description": "The audio Source used for audio playback, or nil to disable audio synchronization.",
                        "name": "source",
                        "type": "Source"
                    }]
                }]
            }, {
                "description": "Gets the current playback position of the Video.",
                "name": "tell",
                "variants": [{
                    "arguments": [{
                        "description": "The time in seconds since the beginning of the Video.",
                        "name": "seconds",
                        "type": "number"
                    }]
                }]
            }],
            "name": "Video",
            "supertypes": ["Drawable", "Object"]
        }]
    }, {
        "description": "Provides an interface to decode encoded image data.",
        "enums": [{
            "constants": [{
                "description": "The DXT1 format. RGB data at 4 bits per pixel (compared to 32 bits for ImageData and regular Images.) Suitable for fully opaque images. Suitable for fully opaque images on desktop systems.",
                "name": "DXT1"
            }, {
                "description": "The DXT3 format. RGBA data at 8 bits per pixel. Smooth variations in opacity do not mix well with this format.",
                "name": "DXT3"
            }, {
                "description": "The DXT5 format. RGBA data at 8 bits per pixel. Recommended for images with varying opacity on desktop systems.",
                "name": "DXT5"
            }, {
                "description": "The BC4 format (also known as 3Dc+ or ATI1.) Stores just the red channel, at 4 bits per pixel.",
                "name": "BC4"
            }, {
                "description": "The signed variant of the BC4 format. Same as above but the pixel values in the texture are in the range of [-1, 1] instead of [0, 1] in shaders.",
                "name": "BC4s"
            }, {
                "description": "The BC5 format (also known as 3Dc or ATI2.) Stores red and green channels at 8 bits per pixel.",
                "name": "BC5"
            }, {
                "description": "The signed variant of the BC5 format.",
                "name": "BC5s"
            }, {
                "description": "The BC6H format. Stores half-precision floating-point RGB data in the range of [0, 65504] at 8 bits per pixel. Suitable for HDR images on desktop systems.",
                "name": "BC6h"
            }, {
                "description": "The signed variant of the BC6H format. Stores RGB data in the range of [-65504, +65504].",
                "name": "BC6hs"
            }, {
                "description": "The BC7 format (also known as BPTC.) Stores RGB or RGBA data at 8 bits per pixel.",
                "name": "BC7"
            }, {
                "description": "The ETC1 format. RGB data at 4 bits per pixel. Suitable for fully opaque images on older Android devices.",
                "name": "ETC1"
            }, {
                "description": "The RGB variant of the ETC2 format. RGB data at 4 bits per pixel. Suitable for fully opaque images on newer mobile devices.",
                "name": "ETC2rgb"
            }, {
                "description": "The RGBA variant of the ETC2 format. RGBA data at 8 bits per pixel. Recommended for images with varying opacity on newer mobile devices.",
                "name": "ETC2rgba"
            }, {
                "description": "The RGBA variant of the ETC2 format where pixels are either fully transparent or fully opaque. RGBA data at 4 bits per pixel.",
                "name": "ETC2rgba1"
            }, {
                "description": "The single-channel variant of the EAC format. Stores just the red channel, at 4 bits per pixel.",
                "name": "EACr"
            }, {
                "description": "The signed single-channel variant of the EAC format. Same as above but pixel values in the texture are in the range of [-1, 1] instead of [0, 1] in shaders.",
                "name": "EACrs"
            }, {
                "description": "The two-channel variant of the EAC format. Stores red and green channels at 8 bits per pixel.",
                "name": "EACrg"
            }, {
                "description": "The signed two-channel variant of the EAC format.",
                "name": "EACrgs"
            }, {
                "description": "The 2 bit per pixel RGB variant of the PVRTC1 format. Stores RGB data at 2 bits per pixel. Textures compressed with PVRTC1 formats must be square and power-of-two sized.",
                "name": "PVR1rgb2"
            }, {
                "description": "The 4 bit per pixel RGB variant of the PVRTC1 format. Stores RGB data at 4 bits per pixel.",
                "name": "PVR1rgb4"
            }, {
                "description": "The 2 bit per pixel RGBA variant of the PVRTC1 format.",
                "name": "PVR1rgba2"
            }, {
                "description": "The 4 bit per pixel RGBA variant of the PVRTC1 format.",
                "name": "PVR1rgba4"
            }, {
                "description": "The 4x4 pixels per block variant of the ASTC format. RGBA data at 8 bits per pixel.",
                "name": "ASTC4x4"
            }, {
                "description": "The 5x4 pixels per block variant of the ASTC format. RGBA data at 6.4 bits per pixel.",
                "name": "ASTC5x4"
            }, {
                "description": "The 5x5 pixels per block variant of the ASTC format. RGBA data at 5.12 bits per pixel.",
                "name": "ASTC5x5"
            }, {
                "description": "The 6x5 pixels per block variant of the ASTC format. RGBA data at 4.27 bits per pixel.",
                "name": "ASTC6x5"
            }, {
                "description": "The 6x6 pixels per block variant of the ASTC format. RGBA data at 3.56 bits per pixel.",
                "name": "ASTC6x6"
            }, {
                "description": "The 8x5 pixels per block variant of the ASTC format. RGBA data at 3.2 bits per pixel.",
                "name": "ASTC8x5"
            }, {
                "description": "The 8x6 pixels per block variant of the ASTC format. RGBA data at 2.67 bits per pixel.",
                "name": "ASTC8x6"
            }, {
                "description": "The 8x8 pixels per block variant of the ASTC format. RGBA data at 2 bits per pixel.",
                "name": "ASTC8x8"
            }, {
                "description": "The 10x5 pixels per block variant of the ASTC format. RGBA data at 2.56 bits per pixel.",
                "name": "ASTC10x5"
            }, {
                "description": "The 10x6 pixels per block variant of the ASTC format. RGBA data at 2.13 bits per pixel.",
                "name": "ASTC10x6"
            }, {
                "description": "The 10x8 pixels per block variant of the ASTC format. RGBA data at 1.6 bits per pixel.",
                "name": "ASTC10x8"
            }, {
                "description": "The 10x10 pixels per block variant of the ASTC format. RGBA data at 1.28 bits per pixel.",
                "name": "ASTC10x10"
            }, {
                "description": "The 12x10 pixels per block variant of the ASTC format. RGBA data at 1.07 bits per pixel.",
                "name": "ASTC12x10"
            }, {
                "description": "The 12x12 pixels per block variant of the ASTC format. RGBA data at 0.89 bits per pixel.",
                "name": "ASTC12x12"
            }],
            "description": "Compressed image data formats. Here and here are a couple overviews of many of the formats.\n\nUnlike traditional PNG or jpeg, these formats stay compressed in RAM and in the graphics card's VRAM. This is good for saving memory space as well as improving performance, since the graphics card will be able to keep more of the image's pixels in its fast-access cache when drawing it.",
            "name": "CompressedImageFormat"
        }, {
            "constants": [{
                "description": "Targa image format.",
                "name": "tga"
            }, {
                "description": "PNG image format.",
                "name": "png"
            }],
            "description": "Encoded image formats.",
            "name": "ImageFormat"
        }],
        "functions": [{
            "description": "Determines whether a file can be loaded as CompressedImageData.",
            "name": "isCompressed",
            "variants": [{
                "arguments": [{
                    "description": "The filename of the potentially compressed image file.",
                    "name": "filename",
                    "type": "string"
                }],
                "returns": [{
                    "description": "Whether the file can be loaded as CompressedImageData or not.",
                    "name": "compressed",
                    "type": "boolean"
                }]
            }, {
                "arguments": [{
                    "description": "A FileData potentially containing a compressed image.",
                    "name": "fileData",
                    "type": "FileData"
                }],
                "returns": [{
                    "description": "Whether the FileData can be loaded as CompressedImageData or not.",
                    "name": "compressed",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Create a new CompressedImageData object from a compressed image file. LÖVE supports several compressed texture formats, enumerated in the CompressedImageFormat page.",
            "name": "newCompressedData",
            "variants": [{
                "arguments": [{
                    "description": "The filename of the compressed image file.",
                    "name": "filename",
                    "type": "string"
                }],
                "returns": [{
                    "description": "The new CompressedImageData object.",
                    "name": "compressedImageData",
                    "type": "CompressedImageData"
                }]
            }, {
                "arguments": [{
                    "description": "A FileData containing a compressed image.",
                    "name": "fileData",
                    "type": "FileData"
                }],
                "returns": [{
                    "description": "The new CompressedImageData object.",
                    "name": "compressedImageData",
                    "type": "CompressedImageData"
                }]
            }]
        }, {
            "description": "Create a new ImageData object.",
            "name": "newImageData",
            "variants": [{
                "arguments": [{
                    "description": "The width of the ImageData.",
                    "name": "width",
                    "type": "number"
                }, {
                    "description": "The height of the ImageData.",
                    "name": "height",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new blank ImageData object. Each pixel's color values, (including the alpha values!) will be set to zero.",
                    "name": "imageData",
                    "type": "ImageData"
                }]
            }, {
                "arguments": [{
                    "description": "The width of the ImageData.",
                    "name": "width",
                    "type": "number"
                }, {
                    "description": "The height of the ImageData.",
                    "name": "height",
                    "type": "number"
                }, {
                    "description": "The data to load into the ImageData (RGBA bytes, left to right and top to bottom).",
                    "name": "data",
                    "type": "string"
                }],
                "returns": [{
                    "description": "The new ImageData object.",
                    "name": "imageData",
                    "type": "ImageData"
                }]
            }, {
                "arguments": [{
                    "description": "The filename of the image file.",
                    "name": "filename",
                    "type": "string"
                }],
                "returns": [{
                    "description": "The new ImageData object.",
                    "name": "imageData",
                    "type": "ImageData"
                }]
            }, {
                "arguments": [{
                    "description": "The encoded file data to decode into image data.",
                    "name": "filedata",
                    "type": "FileData"
                }],
                "returns": [{
                    "description": "The new ImageData object.",
                    "name": "imageData",
                    "type": "ImageData"
                }]
            }]
        }],
        "name": "image",
        "types": [{
            "constructors": ["newCompressedData"],
            "description": "Represents compressed image data designed to stay compressed in RAM.\n\nCompressedImageData encompasses standard compressed texture formats such as DXT1, DXT5, and BC5 / 3Dc.\n\nYou can't draw CompressedImageData directly to the screen. See Image for that.",
            "functions": [{
                "description": "Gets the width and height of the CompressedImageData.",
                "name": "getDimensions",
                "variants": [{
                    "returns": [{
                        "description": "The width of the CompressedImageData.",
                        "name": "width",
                        "type": "number"
                    }, {
                        "description": "The height of the CompressedImageData.",
                        "name": "height",
                        "type": "number"
                    }]
                }, {
                    "arguments": [{
                        "description": "A mipmap level. Must be in the range of [1, CompressedImageData:getMipmapCount()].",
                        "name": "level",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The width of the CompressedImageData.",
                        "name": "width",
                        "type": "number"
                    }, {
                        "description": "The height of the CompressedImageData.",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the format of the CompressedImageData.",
                "name": "getFormat",
                "variants": [{
                    "returns": [{
                        "description": "The format of the CompressedImageData.",
                        "name": "format",
                        "type": "CompressedImageFormat"
                    }]
                }]
            }, {
                "description": "Gets the height of the CompressedImageData.",
                "name": "getHeight",
                "variants": [{
                    "returns": [{
                        "description": "The height of the CompressedImageData.",
                        "name": "height",
                        "type": "number"
                    }]
                }, {
                    "arguments": [{
                        "description": "A mipmap level. Must be in the range of [1,  CompressedImageData:getMipmapCount()].",
                        "name": "level",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The height of the CompressedImageData.",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the number of mipmap levels in the CompressedImageData. The base mipmap level (original image) is included in the count.",
                "name": "getMipmapCount",
                "variants": [{
                    "arguments": [{
                        "description": "The number of mipmap levels stored in the CompressedImageData.",
                        "name": "mipmaps",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the width of the CompressedImageData.",
                "name": "getWidth",
                "variants": [{
                    "returns": [{
                        "description": "The width of the CompressedImageData.",
                        "name": "width",
                        "type": "number"
                    }]
                }, {
                    "arguments": [{
                        "description": "A mipmap level. Must be in the range of [1, CompressedImageData:getMipmapCount()].",
                        "name": "level",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The width of the CompressedImageData.",
                        "name": "width",
                        "type": "number"
                    }]
                }]
            }],
            "name": "CompressedImageData",
            "supertypes": ["Data", "Object"]
        }, {
            "constructors": ["newImageData"],
            "description": "Raw (decoded) image data.\n\nYou can't draw ImageData directly to screen. See Image for that.",
            "functions": [{
                "description": "Encodes the ImageData and optionally writes it to the save directory.",
                "name": "encode",
                "variants": [{
                    "arguments": [{
                        "description": "The format to encode the image as.",
                        "name": "format",
                        "type": "ImageFormat"
                    }, {
                        "default": "nil",
                        "description": "The filename to write the file to. If nil, no file will be written but the FileData will still be returned.",
                        "name": "filename",
                        "type": "string"
                    }],
                    "returns": [{
                        "description": "The encoded image as a new FileData object.",
                        "name": "filedata",
                        "type": "FileData"
                    }]
                }]
            }, {
                "description": "Gets the width and height of the ImageData in pixels.",
                "name": "getDimensions",
                "variants": [{
                    "returns": [{
                        "description": "The width of the ImageData in pixels.",
                        "name": "width",
                        "type": "number"
                    }, {
                        "description": "The height of the ImageData in pixels.",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the height of the ImageData in pixels.",
                "name": "getHeight",
                "variants": [{
                    "returns": [{
                        "description": "The height of the ImageData in pixels.",
                        "name": "height",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the color of a pixel at a specific position in the image.\n\nValid x and y values start at 0 and go up to image width and height minus 1.",
                "name": "getPixel",
                "variants": [{
                    "arguments": [{
                        "description": "The position of the pixel on the x-axis.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The position of the pixel on the y-axis.",
                        "name": "y",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The red component (0-255).",
                        "name": "r",
                        "type": "number"
                    }, {
                        "description": "The green component (0-255).",
                        "name": "g",
                        "type": "number"
                    }, {
                        "description": "The blue component (0-255).",
                        "name": "b",
                        "type": "number"
                    }, {
                        "description": "The alpha component (0-255).",
                        "name": "a",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the width of the ImageData in pixels.",
                "name": "getWidth",
                "variants": [{
                    "returns": [{
                        "description": "The width of the ImageData in pixels.",
                        "name": "width",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Transform an image by applying a function to every pixel.\n\nThis function is a higher order function. It takes another function as a parameter, and calls it once for each pixel in the ImageData.\n\nThe function parameter is called with six parameters for each pixel in turn. The parameters are numbers that represent the x and y coordinates of the pixel and its red, green, blue and alpha values. The function parameter can return up to four number values, which become the new r, g, b and a values of the pixel. If the function returns fewer values, the remaining components are set to 0.",
                "name": "mapPixel",
                "variants": [{
                    "arguments": [{
                        "description": "Function parameter to apply to every pixel.",
                        "name": "pixelFunction",
                        "type": "function"
                    }]
                }]
            }, {
                "description": "Paste into ImageData from another source ImageData.",
                "name": "paste",
                "variants": [{
                    "arguments": [{
                        "description": "Source ImageData from which to copy.",
                        "name": "source",
                        "type": "ImageData"
                    }, {
                        "description": "Destination top-left position on x-axis.",
                        "name": "dx",
                        "type": "number"
                    }, {
                        "description": "Destination top-left position on y-axis.",
                        "name": "dy",
                        "type": "number"
                    }, {
                        "description": "Source top-left position on x-axis.",
                        "name": "sx",
                        "type": "number"
                    }, {
                        "description": "Source top-left position on y-axis.",
                        "name": "sy",
                        "type": "number"
                    }, {
                        "description": "Source width.",
                        "name": "sw",
                        "type": "number"
                    }, {
                        "description": "Source height.",
                        "name": "sh",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the color of a pixel at a specific position in the image.\n\nValid x and y values start at 0 and go up to image width and height minus 1.",
                "name": "setPixel",
                "variants": [{
                    "arguments": [{
                        "description": "The position of the pixel on the x-axis.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The position of the pixel on the y-axis.",
                        "name": "y",
                        "type": "number"
                    }, {
                        "description": "The red component (0-255).",
                        "name": "r",
                        "type": "number"
                    }, {
                        "description": "The green component (0-255).",
                        "name": "g",
                        "type": "number"
                    }, {
                        "description": "The blue component (0-255).",
                        "name": "b",
                        "type": "number"
                    }, {
                        "description": "The alpha component (0-255).",
                        "name": "a",
                        "type": "number"
                    }]
                }]
            }],
            "name": "ImageData",
            "supertypes": ["Data", "Object"]
        }]
    }, {
        "description": "Provides an interface to the user's joystick.",
        "enums": [{
            "constants": [{
                "description": "The x-axis of the left thumbstick.",
                "name": "leftx"
            }, {
                "description": "The y-axis of the left thumbstick.",
                "name": "lefty"
            }, {
                "description": "The x-axis of the right thumbstick.",
                "name": "rightx"
            }, {
                "description": "The y-axis of the right thumbstick.",
                "name": "righty"
            }, {
                "description": "Left analog trigger.",
                "name": "triggerleft"
            }, {
                "description": "Right analog trigger.",
                "name": "triggerright"
            }],
            "description": "Virtual gamepad axes.",
            "name": "GamepadAxis"
        }, {
            "constants": [{
                "description": "Bottom face button (A).",
                "name": "a"
            }, {
                "description": "Right face button (B).",
                "name": "b"
            }, {
                "description": "Left face button (X).",
                "name": "x"
            }, {
                "description": "Top face button (Y).",
                "name": "y"
            }, {
                "description": "Back button.",
                "name": "back"
            }, {
                "description": "Guide button.",
                "name": "guide"
            }, {
                "description": "Start button.",
                "name": "start"
            }, {
                "description": "Left stick click button.",
                "name": "leftstick"
            }, {
                "description": "Right stick click button.",
                "name": "rightstick"
            }, {
                "description": "Left bumper.",
                "name": "leftshoulder"
            }, {
                "description": "Right bumper.",
                "name": "rightshoulder"
            }, {
                "description": "D-pad up.",
                "name": "dpup"
            }, {
                "description": "D-pad down.",
                "name": "dpdown"
            }, {
                "description": "D-pad left.",
                "name": "dpleft"
            }, {
                "description": "D-pad right.",
                "name": "dpright"
            }],
            "description": "Virtual gamepad buttons.",
            "name": "GamepadButton"
        }, {
            "constants": [{
                "description": "Analog axis.",
                "name": "axis"
            }, {
                "description": "Button.",
                "name": "button"
            }, {
                "description": "8-direction hat value.",
                "name": "hat"
            }],
            "description": "Types of Joystick inputs.",
            "name": "JoystickInputType"
        }],
        "functions": [{
            "description": "Gets the number of connected joysticks.",
            "name": "getJoystickCount",
            "variants": [{
                "returns": [{
                    "description": "The number of connected joysticks.",
                    "name": "joystickcount",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets a list of connected Joysticks.",
            "name": "getJoysticks",
            "variants": [{
                "returns": [{
                    "description": "The list of currently connected Joysticks.",
                    "name": "joysticks",
                    "type": "table"
                }]
            }]
        }, {
            "description": "Splits a joycon pair into two. Switch only",
            "name": "split",
            "variants": [{
                "arguments": [{
                    "description": "The joycon pair to split.",
                    "name": "joyconPair",
                    "type": "Joystick"
                }],
                "returns": [{
                    "description": "Whether spliting the pair was successful.",
                    "name": "success",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Merges two separate joycon into one. Switch only",
            "name": "merge",
            "variants": [{
                "arguments": [{
                    "description": "The first joycon to merge.",
                    "name": "joyconA",
                    "type": "Joystick"
                }, {
                    "description": "The second joycon to merge.",
                    "name": "joyconB",
                    "type": "Joystick"
                }],
                "returns": [{
                    "description": "Whether merging the joycons was successful.",
                    "name": "success",
                    "type": "boolean"
                }]
            }]
        }],
        "name": "joystick",
        "types": [{
            "constructors": ["getJoysticks"],
            "description": "Represents a physical joystick.",
            "functions": [{
                "description": "Gets the direction of each axis.",
                "name": "getAxes",
                "variants": [{
                    "returns": [{
                        "description": "Direction of axis1.",
                        "name": "axisDir1",
                        "type": "number"
                    }, {
                        "description": "Direction of axis2.",
                        "name": "axisDir2",
                        "type": "number"
                    }, {
                        "description": "Direction of axisN.",
                        "name": "axisDirN",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the direction of an axis.",
                "name": "getAxis",
                "variants": [{
                    "arguments": [{
                        "description": "The index of the axis to be checked.",
                        "name": "axis",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "Current value of the axis.",
                        "name": "direction",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the number of axes on the joystick.",
                "name": "getAxisCount",
                "variants": [{
                    "returns": [{
                        "description": "The number of axes available.",
                        "name": "axes",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the number of buttons on the joystick.",
                "name": "getButtonCount",
                "variants": [{
                    "returns": [{
                        "description": "The number of buttons available.",
                        "name": "buttons",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the direction of a virtual gamepad axis. If the Joystick isn't recognized as a gamepad or isn't connected, this function will always return 0.",
                "name": "getGamepadAxis",
                "variants": [{
                    "arguments": [{
                        "description": "The virtual axis to be checked.",
                        "name": "axis",
                        "type": "GamepadAxis"
                    }],
                    "returns": [{
                        "description": "Current value of the axis.",
                        "name": "direction",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the joystick's unique identifier. The identifier will remain the same for the life of the game, even when the Joystick is disconnected and reconnected, but it will change when the game is re-launched.",
                "name": "getID",
                "variants": [{
                    "returns": [{
                        "description": "The Joystick's unique identifier. Remains the same as long as the game is running.",
                        "name": "id",
                        "type": "number"
                    }, {
                        "description": "Unique instance identifier. Changes every time the Joystick is reconnected. nil if the Joystick is not connected.",
                        "name": "instanceid",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the name of the joystick.",
                "name": "getName",
                "variants": [{
                    "returns": [{
                        "description": "The name of the joystick.",
                        "name": "name",
                        "type": "string"
                    }]
                }]
            }, {
                "description": "Gets the current vibration motor strengths on a Joystick with rumble support.",
                "name": "getVibration",
                "variants": [{
                    "returns": [{
                        "description": "Current strength of the left vibration motor on the Joystick.",
                        "name": "left",
                        "type": "number"
                    }, {
                        "description": "Current strength of the right vibration motor on the Joystick.",
                        "name": "right",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets whether the Joystick is connected.",
                "name": "isConnected",
                "variants": [{
                    "returns": [{
                        "description": "True if the Joystick is currently connected, false otherwise.",
                        "name": "connected",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Checks if a button on the Joystick is pressed.\n\nLÖVE 0.9.0 had a bug which required the button indices passed to Joystick:isDown to be 0-based instead of 1-based, for example button 1 would be 0 for this function. It was fixed in 0.9.1.",
                "name": "isDown",
                "variants": [{
                    "arguments": [{
                        "description": "The index of a button to check.",
                        "name": "...",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "True if any supplied button is down, false if not.",
                        "name": "anyDown",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Gets whether the Joystick is recognized as a gamepad. If this is the case, the Joystick's buttons and axes can be used in a standardized manner across different operating systems and joystick models via Joystick:getGamepadAxis and related functions.\n\nLÖVE automatically recognizes most popular controllers with a similar layout to the Xbox 360 controller as gamepads, but you can add more with love.joystick.setGamepadMapping.",
                "name": "isGamepad",
                "variants": [{
                    "returns": [{
                        "description": "True if the Joystick is recognized as a gamepad, false otherwise.",
                        "name": "isgamepad",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Checks if a virtual gamepad button on the Joystick is pressed. If the Joystick is not recognized as a Gamepad or isn't connected, then this function will always return false.",
                "name": "isGamepadDown",
                "variants": [{
                    "arguments": [{
                        "description": "The gamepad button to check.",
                        "name": "...",
                        "type": "GamepadButton"
                    }],
                    "returns": [{
                        "description": "True if any supplied button is down, false if not.",
                        "name": "anyDown",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Gets whether the Joystick supports vibration.",
                "name": "isVibrationSupported",
                "variants": [{
                    "returns": [{
                        "description": "True if rumble / force feedback vibration is supported on this Joystick, false if not.",
                        "name": "supported",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Sets the vibration motor speeds on a Joystick with rumble support.",
                "name": "setVibration",
                "variants": [{
                    "arguments": [{
                        "description": "Strength of the left vibration motor on the Joystick. Must be in the range of [0, 1].",
                        "name": "left",
                        "type": "number"
                    }, {
                        "description": "Strength of the right vibration motor on the Joystick. Must be in the range of [0, 1].",
                        "name": "right",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "True if the vibration was successfully applied, false if not.",
                        "name": "success",
                        "type": "boolean"
                    }]
                }, {
                    "returns": [{
                        "description": "True if the vibration was successfully disabled, false if not.",
                        "name": "success",
                        "type": "boolean"
                    }]
                }, {
                    "arguments": [{
                        "description": "Strength of the left vibration motor on the Joystick. Must be in the range of [0, 1].",
                        "name": "left",
                        "type": "number"
                    }, {
                        "description": "Strength of the right vibration motor on the Joystick. Must be in the range of [0, 1].",
                        "name": "right",
                        "type": "number"
                    }, {
                        "description": "The duration of the vibration in seconds. A negative value means infinite duration.",
                        "name": "duration",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "True if the vibration was successfully applied, false if not.",
                        "name": "success",
                        "type": "boolean"
                    }]
                }]
            }],
            "name": "Joystick",
            "supertypes": ["Object"]
        }]
    }, {
        "description": "Provides an interface to the user's keyboard.",
        "enums": [{
            "constants": [{
                "description": "All character and numbers allowed.",
                "name": "normal"
            }, {
                "description": "QWERTY only.",
                "name": "qwerty"
            }, {
                "description": "numbers only.",
                "name": "numpad"
            }],
            "description": "The keyboard type for text input.",
            "name": "KeyboardType"
        }],
        "functions": [{
            "description": "Enables or disables text input events. It is enabled by default on Windows, Mac, and Linux, and disabled by default on iOS and Android.",
            "name": "setTextInput",
            "variants": [{
                "arguments": [{
                    "description": "Whether text input events should be enabled.",
                    "name": "options",
                    "table": [{
                        "description": "The keyboard type.",
                        "name": "type",
                        "type": "KeyboardType"
                    }, {
                        "description": "Whether this should be a password fielded input.",
                        "name": "password",
                        "type": "boolean"
                    }, {
                        "description": "custom hint text.",
                        "name": "hint",
                        "type": "string"
                    }, {
                        "description": "Max length of input text.",
                        "name": "maxLength",
                        "type": "number"
                    }],
                    "type": "table"
                }]
            }]
        }],
        "name": "keyboard"
    }, {
        "description": "Provides system-independent mathematical functions.",
        "enums": [{
            "constants": [{
                "description": "The LZ4 compression format. Compresses and decompresses very quickly, but the compression ratio is not the best. LZ4-HC is used when compression level 9 is specified.",
                "name": "lz4"
            }, {
                "description": "The zlib format is DEFLATE-compressed data with a small bit of header data. Compresses relatively slowly and decompresses moderately quickly, and has a decent compression ratio.",
                "name": "zlib"
            }, {
                "description": "The gzip format is DEFLATE-compressed data with a slightly larger header than zlib. Since it uses DEFLATE it has the same compression characteristics as the zlib format.",
                "name": "gzip"
            }],
            "description": "Compressed data formats.",
            "name": "CompressedDataFormat"
        }],
        "functions": [{
            "description": "Converts a color from 0 ~ 255 to 0 ~ 1 range.",
            "name": "colorFromBytes",
            "variants": [{
                "arguments": [{
                    "description": "The red channel in 0..255 range to convert.",
                    "name": "rb",
                    "type": "number"
                }, {
                    "description": "The green channel in 0..255 range to convert.",
                    "name": "gb",
                    "type": "number"
                }, {
                    "description": "The blue channel in 0..255 range to convert.",
                    "name": "bb",
                    "type": "number"
                }, {
                    "default": "nil",
                    "description": "The alpha channel in 0..255 range to convert.",
                    "name": "ab",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The red channel of the converted color in 0..1 range.",
                    "name": "r",
                    "type": "number"
                }, {
                    "description": "The green channel of the converted color in 0..1 range.",
                    "name": "g",
                    "type": "number"
                }, {
                    "description": "The blue channel of the converted color in 0..1 range.",
                    "name": "b",
                    "type": "number"
                }, {
                    "default": "nil",
                    "description": "The alpha channel of the converted color in 0..1 range.",
                    "name": "a",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Converts a color from 0 ~ 1 to 0 ~ 255 range.",
            "name": "colorToBytes",
            "variants": [{
                "arguments": [{
                    "description": "The red channel of the RGBA color to convert.",
                    "name": "r",
                    "type": "number"
                }, {
                    "description": "The green channel of the RGBA color to convert.",
                    "name": "g",
                    "type": "number"
                }, {
                    "description": "The blue channel of the RGBA color to convert.",
                    "name": "b",
                    "type": "number"
                }, {
                    "default": "nil",
                    "description": "The alpha channel of the RGBA color to convert.",
                    "name": "a",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The red channel of the converted color in 0..255 range.",
                    "name": "rb",
                    "type": "number"
                }, {
                    "description": "The green channel of the converted color in 0..255 range.",
                    "name": "gb",
                    "type": "number"
                }, {
                    "description": "The blue channel of the converted color in 0..255 range.",
                    "name": "bb",
                    "type": "number"
                }, {
                    "default": "nil",
                    "description": "The alpha channel of the converted color in 0..255 range.",
                    "name": "ab",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Converts a color from gamma-space (sRGB) to linear-space (RGB). This is useful when doing gamma-correct rendering and you need to do math in linear RGB in the few cases where LÖVE doesn't handle conversions automatically.",
            "name": "gammaToLinear",
            "variants": [{
                "arguments": [{
                    "description": "The red channel of the sRGB color to convert.",
                    "name": "r",
                    "type": "number"
                }, {
                    "description": "The green channel of the sRGB color to convert.",
                    "name": "g",
                    "type": "number"
                }, {
                    "description": "The blue channel of the sRGB color to convert.",
                    "name": "b",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The red channel of the converted color in linear RGB space.",
                    "name": "lr",
                    "type": "number"
                }, {
                    "description": "The green channel of the converted color in linear RGB space.",
                    "name": "lg",
                    "type": "number"
                }, {
                    "description": "The blue channel of the converted color in linear RGB space.",
                    "name": "lb",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "An array with the red, green, and blue channels of the sRGB color to convert.",
                    "name": "color",
                    "type": "table"
                }],
                "returns": [{
                    "description": "The red channel of the converted color in linear RGB space.",
                    "name": "lr",
                    "type": "number"
                }, {
                    "description": "The green channel of the converted color in linear RGB space.",
                    "name": "lg",
                    "type": "number"
                }, {
                    "description": "The blue channel of the converted color in linear RGB space.",
                    "name": "lb",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "The value of a color channel in sRGB space to convert.",
                    "name": "c",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The value of the color channel in linear RGB space.",
                    "name": "lc",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets the seed of the random number generator.\n\nThe state is split into two numbers due to Lua's use of doubles for all number values - doubles can't accurately represent integer values above 2^53.",
            "name": "getRandomSeed",
            "variants": [{
                "returns": [{
                    "description": "Integer number representing the lower 32 bits of the random number generator's 64 bit state value.",
                    "name": "low",
                    "type": "number"
                }, {
                    "description": "Integer number representing the higher 32 bits of the random number generator's 64 bit state value.",
                    "name": "high",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets the current state of the random number generator. This returns an opaque implementation-dependent string which is only useful for later use with RandomGenerator:setState.\n\nThis is different from RandomGenerator:getSeed in that getState gets the RandomGenerator's current state, whereas getSeed gets the previously set seed number.\n\nThe value of the state string does not depend on the current operating system.",
            "name": "getRandomState",
            "variants": [{
                "returns": [{
                    "description": "The current state of the RandomGenerator object, represented as a string.",
                    "name": "state",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Checks whether a polygon is convex.\n\nPolygonShapes in love.physics, some forms of Mesh, and polygons drawn with love.graphics.polygon must be simple convex polygons.",
            "name": "isConvex",
            "variants": [{
                "arguments": [{
                    "description": "The vertices of the polygon as a table in the form of {x1, y1, x2, y2, x3, y3, ...}.",
                    "name": "vertices",
                    "type": "table"
                }],
                "returns": [{
                    "description": "Whether the given polygon is convex.",
                    "name": "convex",
                    "type": "boolean"
                }]
            }, {
                "arguments": [{
                    "description": "The position of the first vertex of the polygon on the x-axis.",
                    "name": "x1",
                    "type": "number"
                }, {
                    "description": "The position of the first vertex of the polygon on the y-axis.",
                    "name": "y1",
                    "type": "number"
                }, {
                    "description": "The position of the second vertex of the polygon on the x-axis.",
                    "name": "x2",
                    "type": "number"
                }, {
                    "description": "The position of the second vertex of the polygon on the y-axis.",
                    "name": "y2",
                    "type": "number"
                }, {
                    "description": "The position of the third vertex of the polygon on the x-axis.",
                    "name": "x3",
                    "type": "number"
                }, {
                    "description": "The position of the third vertex of the polygon on the y-axis.",
                    "name": "y3",
                    "type": "number"
                }, {
                    "description": "Additional vertices.",
                    "name": "...",
                    "type": "number"
                }],
                "returns": [{
                    "description": "Whether the given polygon is convex.",
                    "name": "convex",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Converts a color from linear-space (RGB) to gamma-space (sRGB). This is useful when storing linear RGB color values in an image, because the linear RGB color space has less precision than sRGB for dark colors, which can result in noticeable color banding when drawing.\n\nIn general, colors chosen based on what they look like on-screen are already in gamma-space and should not be double-converted. Colors calculated using math are often in the linear RGB space.",
            "name": "linearToGamma",
            "variants": [{
                "arguments": [{
                    "description": "The red channel of the linear RGB color to convert.",
                    "name": "lr",
                    "type": "number"
                }, {
                    "description": "The green channel of the linear RGB color to convert.",
                    "name": "lg",
                    "type": "number"
                }, {
                    "description": "The blue channel of the linear RGB color to convert.",
                    "name": "lb",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The red channel of the converted color in gamma sRGB space.",
                    "name": "cr",
                    "type": "number"
                }, {
                    "description": "The green channel of the converted color in gamma sRGB space.",
                    "name": "cg",
                    "type": "number"
                }, {
                    "description": "The blue channel of the converted color in gamma sRGB space.",
                    "name": "cb",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "An array with the red, green, and blue channels of the linear RGB color to convert.",
                    "name": "color",
                    "type": "table"
                }],
                "returns": [{
                    "description": "The red channel of the converted color in gamma sRGB space.",
                    "name": "cr",
                    "type": "number"
                }, {
                    "description": "The green channel of the converted color in gamma sRGB space.",
                    "name": "cg",
                    "type": "number"
                }, {
                    "description": "The blue channel of the converted color in gamma sRGB space.",
                    "name": "cb",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "The value of a color channel in linear RGB space to convert.",
                    "name": "lc",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The value of the color channel in gamma sRGB space.",
                    "name": "c",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Creates a new RandomGenerator object which is completely independent of other RandomGenerator objects and random functions.",
            "name": "newRandomGenerator",
            "variants": [{
                "returns": [{
                    "description": "A Random Number Generator object.",
                    "name": "rng",
                    "type": "RandomGenerator"
                }]
            }, {
                "arguments": [{
                    "description": "The lower 32 bits of the state number to use for this instance of the object.",
                    "name": "low",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "The higher 32 bits of the state number to use for this instance of the object.",
                    "name": "high",
                    "type": "number"
                }],
                "returns": [{
                    "description": "A Random Number Generator object.",
                    "name": "rng",
                    "type": "RandomGenerator"
                }]
            }, {
                "arguments": [{
                    "description": "A state of a RandomGenerator object returned by RandomGenerator:getState.",
                    "name": "seed",
                    "type": "string"
                }],
                "returns": [{
                    "description": "A Random Number Generator object.",
                    "name": "rng",
                    "type": "RandomGenerator"
                }]
            }]
        }, {
            "description": "Generates a Simplex or Perlin noise value in 1-4 dimensions. The return value will always be the same, given the same arguments.\n\nSimplex noise is closely related to Perlin noise. It is widely used for procedural content generation.\n\nThere are many webpages which discuss Perlin and Simplex noise in detail.",
            "name": "noise",
            "variants": [{
                "arguments": [{
                    "description": "The number used to generate the noise value.",
                    "name": "x",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The noise value in the range of [0, 1].",
                    "name": "value",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "The first value of the 2-dimensional vector used to generate the noise value.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The second value of the 2-dimensional vector used to generate the noise value.",
                    "name": "y",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The noise value in the range of [0, 1].",
                    "name": "value",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "The first value of the 3-dimensional vector used to generate the noise value.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The second value of the 3-dimensional vector used to generate the noise value.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "The third value of the 3-dimensional vector used to generate the noise value.",
                    "name": "z",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The noise value in the range of [0, 1].",
                    "name": "value",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "The first value of the 4-dimensional vector used to generate the noise value.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The second value of the 4-dimensional vector used to generate the noise value.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "The third value of the 4-dimensional vector used to generate the noise value.",
                    "name": "z",
                    "type": "number"
                }, {
                    "description": "The fourth value of the 4-dimensional vector used to generate the noise value.",
                    "name": "w",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The noise value in the range of [0, 1].",
                    "name": "value",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Generates a pseudo-random number in a platform independent manner.",
            "name": "random",
            "variants": [{
                "description": "Get uniformly distributed pseudo-random real number within [0, 1].",
                "returns": [{
                    "description": "The pseudo-random number.",
                    "name": "number",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "The maximum possible value it should return.",
                    "name": "max",
                    "type": "number"
                }],
                "description": "Get a uniformly distributed pseudo-random integer within [1, max].",
                "returns": [{
                    "description": "The pseudo-random integer number.",
                    "name": "number",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "The minimum possible value it should return.",
                    "name": "min",
                    "type": "number"
                }, {
                    "description": "The maximum possible value it should return.",
                    "name": "max",
                    "type": "number"
                }],
                "description": "Get uniformly distributed pseudo-random integer within [min, max].",
                "returns": [{
                    "description": "The pseudo-random integer number.",
                    "name": "number",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Get a normally distributed pseudo random number.",
            "name": "randomNormal",
            "variants": [{
                "arguments": [{
                    "default": "1",
                    "description": "Standard deviation of the distribution.",
                    "name": "stddev",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "The mean of the distribution.",
                    "name": "mean",
                    "type": "number"
                }],
                "returns": [{
                    "description": "Normally distributed random number with variance (stddev)² and the specified mean.",
                    "name": "number",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Sets the seed of the random number generator using the specified integer number.",
            "name": "setRandomSeed",
            "variants": [{
                "arguments": [{
                    "description": "The integer number with which you want to seed the randomization. Must be within the range of [1, 2^53].",
                    "name": "seed",
                    "type": "number"
                }]
            }, {
                "arguments": [{
                    "description": "The lower 32 bits of the state value. Must be within the range of [0, 2^32 - 1].",
                    "name": "low",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "The higher 32 bits of the state value. Must be within the range of [0, 2^32 - 1].",
                    "name": "high",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets the current state of the random number generator. This returns an opaque implementation-dependent string which is only useful for later use with RandomGenerator:setState.\n\nThis is different from RandomGenerator:getSeed in that getState gets the RandomGenerator's current state, whereas getSeed gets the previously set seed number.\n\nThe value of the state string does not depend on the current operating system.",
            "name": "setRandomState",
            "variants": [{
                "arguments": [{
                    "description": "The current state of the RandomGenerator object, represented as a string.",
                    "name": "state",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Triangulate a simple polygon.",
            "name": "triangulate",
            "variants": [{
                "arguments": [{
                    "description": "Polygon to triangulate. Must not intersect itself.",
                    "name": "polygon",
                    "type": "table"
                }],
                "returns": [{
                    "description": "List of triangles the polygon is composed of, in the form of {{x1, y1, x2, y2, x3, y3}, {x1, y1, x2, y2, x3, y3}, ...}.",
                    "name": "triangles",
                    "type": "table"
                }]
            }, {
                "arguments": [{
                    "description": "The position of the first vertex of the polygon on the x-axis.",
                    "name": "x1",
                    "type": "number"
                }, {
                    "description": "The position of the first vertex of the polygon on the y-axis.",
                    "name": "y1",
                    "type": "number"
                }, {
                    "description": "The position of the second vertex of the polygon on the x-axis.",
                    "name": "x2",
                    "type": "number"
                }, {
                    "description": "The position of the second vertex of the polygon on the y-axis.",
                    "name": "y2",
                    "type": "number"
                }, {
                    "description": "The position of the third vertex of the polygon on the x-axis.",
                    "name": "x3",
                    "type": "number"
                }, {
                    "description": "The position of the third vertex of the polygon on the y-axis.",
                    "name": "y3",
                    "type": "number"
                }, {
                    "description": "Additional vertices.",
                    "name": "...",
                    "type": "number"
                }],
                "returns": [{
                    "description": "List of triangles the polygon is composed of, in the form of {{x1, y1, x2, y2, x3, y3}, {x1, y1, x2, y2, x3, y3}, ...}.",
                    "name": "triangles",
                    "type": "table"
                }]
            }]
        }],
        "name": "math",
        "types": [{
            "constructors": ["newRandomGenerator"],
            "description": "A random number generation object which has its own random state.",
            "functions": [{
                "description": "Gets the state of the random number generator.\n\nThe state is split into two numbers due to Lua's use of doubles for all number values - doubles can't accurately represent integer values above 2^53.",
                "name": "getSeed",
                "variants": [{
                    "returns": [{
                        "description": "Integer number representing the lower 32 bits of the random number generator's 64 bit state value.",
                        "name": "low",
                        "type": "number"
                    }, {
                        "description": "Integer number representing the higher 32 bits of the random number generator's 64 bit state value.",
                        "name": "high",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the current state of the random number generator. This returns an opaque implementation-dependent string which is only useful for later use with RandomGenerator:setState.\n\nThis is different from RandomGenerator:getSeed in that getState gets the RandomGenerator's current state, whereas getSeed gets the previously set seed number.\n\nThe value of the state string does not depend on the current operating system.",
                "name": "getState",
                "variants": [{
                    "returns": [{
                        "description": "The current state of the RandomGenerator object, represented as a string.",
                        "name": "state",
                        "type": "string"
                    }]
                }]
            }, {
                "description": "Generates a pseudo-random number in a platform independent manner.",
                "name": "random",
                "variants": [{
                    "description": "Get uniformly distributed pseudo-random number within [0, 1].",
                    "returns": [{
                        "description": "The pseudo random number.",
                        "name": "number",
                        "type": "number"
                    }]
                }, {
                    "arguments": [{
                        "description": "The maximum possible value it should return.",
                        "name": "max",
                        "type": "number"
                    }],
                    "description": "Get uniformly distributed pseudo-random integer number within [1, max].",
                    "returns": [{
                        "description": "The pseudo-random integer number.",
                        "name": "number",
                        "type": "number"
                    }]
                }, {
                    "arguments": [{
                        "description": "The minimum possible value it should return.",
                        "name": "min",
                        "type": "number"
                    }, {
                        "description": "The maximum possible value it should return.",
                        "name": "max",
                        "type": "number"
                    }],
                    "description": "Get uniformly distributed pseudo-random integer number within [min, max].",
                    "returns": [{
                        "description": "The pseudo-random integer number.",
                        "name": "number",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get a normally distributed pseudo random number.",
                "name": "randomNormal",
                "variants": [{
                    "arguments": [{
                        "default": "1",
                        "description": "Standard deviation of the distribution.",
                        "name": "stddev",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "The mean of the distribution.",
                        "name": "mean",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "Normally distributed random number with variance (stddev)² and the specified mean.",
                        "name": "number",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the seed of the random number generator using the specified integer number.",
                "name": "setSeed",
                "variants": [{
                    "arguments": [{
                        "description": "The integer number with which you want to seed the randomization. Must be within the range of [1, 2^53].",
                        "name": "seed",
                        "type": "number"
                    }]
                }, {
                    "arguments": [{
                        "description": "The lower 32 bits of the state value. Must be within the range of [0, 2^32 - 1].",
                        "name": "low",
                        "type": "number"
                    }, {
                        "default": "0",
                        "description": "The higher 32 bits of the state value. Must be within the range of [0, 2^32 - 1].",
                        "name": "high",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the current state of the random number generator. The value used as an argument for this function is an opaque implementation-dependent string and should only originate from a previous call to RandomGenerator:getState.\n\nThis is different from RandomGenerator:setSeed in that setState directly sets the RandomGenerator's current implementation-dependent state, whereas setSeed gives it a new seed value.\n\nThe effect of the state string does not depend on the current operating system.",
                "name": "setState",
                "variants": [{
                    "arguments": [{
                        "description": "The new state of the RandomGenerator object, represented as a string. This should originate from a previous call to RandomGenerator:getState.",
                        "name": "state",
                        "type": "string"
                    }]
                }]
            }],
            "name": "RandomGenerator",
            "supertypes": ["Object"]
        }]
    }, {
        "description": "Provides an interface to the user's mouse.",
        "enums": [{
            "constants": [{
                "description": "The cursor is using a custom image.",
                "name": "image"
            }, {
                "description": "An arrow pointer.",
                "name": "arrow"
            }, {
                "description": "An I-beam, normally used when mousing over editable or selectable text.",
                "name": "ibeam"
            }, {
                "description": "Wait graphic.",
                "name": "wait"
            }, {
                "description": "Small wait cursor with an arrow pointer.",
                "name": "waitarrow"
            }, {
                "description": "Crosshair symbol.",
                "name": "crosshair"
            }, {
                "description": "Double arrow pointing to the top-left and bottom-right.",
                "name": "sizenwse"
            }, {
                "description": "Double arrow pointing to the top-right and bottom-left.",
                "name": "sizenesw"
            }, {
                "description": "Double arrow pointing left and right.",
                "name": "sizewe"
            }, {
                "description": "Double arrow pointing up and down.",
                "name": "sizens"
            }, {
                "description": "Four-pointed arrow pointing up, down, left, and right.",
                "name": "sizeall"
            }, {
                "description": "Slashed circle or crossbones.",
                "name": "no"
            }, {
                "description": "Hand symbol.",
                "name": "hand"
            }],
            "description": "Types of hardware cursors.",
            "name": "CursorType"
        }],
        "functions": [{
            "description": "Gets the current Cursor.",
            "name": "getCursor",
            "variants": [{
                "returns": [{
                    "description": "The current cursor, or nil if no cursor is set.",
                    "name": "cursor",
                    "type": "Cursor"
                }]
            }]
        }, {
            "description": "Returns the current position of the mouse.",
            "name": "getPosition",
            "variants": [{
                "returns": [{
                    "description": "The position of the mouse along the x-axis.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The position of the mouse along the y-axis.",
                    "name": "y",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets whether relative mode is enabled for the mouse.\n\nIf relative mode is enabled, the cursor is hidden and doesn't move when the mouse does, but relative mouse motion events are still generated via love.mousemoved. This lets the mouse move in any direction indefinitely without the cursor getting stuck at the edges of the screen.\n\nThe reported position of the mouse is not updated while relative mode is enabled, even when relative mouse motion events are generated.",
            "name": "getRelativeMode",
            "variants": [{
                "returns": [{
                    "description": "True if relative mode is enabled, false if it's disabled.",
                    "name": "enabled",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Gets a Cursor object representing a system-native hardware cursor.\n\n Hardware cursors are framerate-independent and work the same way as normal operating system cursors. Unlike drawing an image at the mouse's current coordinates, hardware cursors never have visible lag between when the mouse is moved and when the cursor position updates, even at low framerates.",
            "name": "getSystemCursor",
            "variants": [{
                "arguments": [{
                    "description": "The type of system cursor to get.",
                    "name": "ctype",
                    "type": "CursorType"
                }],
                "returns": [{
                    "description": "The Cursor object representing the system cursor type.",
                    "name": "cursor",
                    "type": "Cursor"
                }]
            }]
        }, {
            "description": "Returns the current x position of the mouse.",
            "name": "getX",
            "variants": [{
                "returns": [{
                    "description": "The position of the mouse along the x-axis.",
                    "name": "x",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Returns the current y position of the mouse.",
            "name": "getY",
            "variants": [{
                "returns": [{
                    "description": "The position of the mouse along the y-axis.",
                    "name": "y",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets whether cursor functionality is supported.\n\nIf it isn't supported, calling love.mouse.newCursor and love.mouse.getSystemCursor will cause an error. Mobile devices do not support cursors.",
            "name": "hasCursor",
            "variants": [{
                "returns": [{
                    "description": "Whether the system has cursor functionality.",
                    "name": "hascursor",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Checks whether a certain mouse button is down. This function does not detect mousewheel scrolling; you must use the love.wheelmoved (or love.mousepressed in version 0.9.2 and older) callback for that.",
            "name": "isDown",
            "variants": [{
                "arguments": [{
                    "description": "The index of a button to check. 1 is the primary mouse button, 2 is the secondary mouse button, etc.",
                    "name": "button",
                    "type": "number"
                }, {
                    "description": "Additional button numbers to check.",
                    "name": "...",
                    "type": "number"
                }],
                "returns": [{
                    "description": "True if the specified button is down.",
                    "name": "down",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Checks if the mouse is grabbed.",
            "name": "isGrabbed",
            "variants": [{
                "returns": [{
                    "description": "True if the cursor is grabbed, false if it is not.",
                    "name": "grabbed",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Checks if the cursor is visible.",
            "name": "isVisible",
            "variants": [{
                "returns": [{
                    "description": "True if the cursor to visible, false if the cursor is hidden.",
                    "name": "visible",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Creates a new hardware Cursor object from an image file or ImageData.\n\nHardware cursors are framerate-independent and work the same way as normal operating system cursors. Unlike drawing an image at the mouse's current coordinates, hardware cursors never have visible lag between when the mouse is moved and when the cursor position updates, even at low frameratesn\n\nThe hot spot is the point the operating system uses to determine what was clicked and at what position the mouse cursor is. For example, the normal arrow pointer normally has its hot spot at the top left of the image, but a crosshair cursor might have it in the middle.",
            "name": "newCursor",
            "variants": [{
                "arguments": [{
                    "description": "The ImageData to use for the the new Cursor.",
                    "name": "imageData",
                    "type": "ImageData"
                }, {
                    "default": "0",
                    "description": "The x-coordinate in the ImageData of the cursor's hot spot.",
                    "name": "hotx",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "The y-coordinate in the ImageData of the cursor's hot spot.",
                    "name": "hoty",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new Cursor object.",
                    "name": "cursor",
                    "type": "Cursor"
                }]
            }, {
                "arguments": [{
                    "description": "Path to the image to use for the new Cursor.",
                    "name": "filepath",
                    "type": "string"
                }, {
                    "default": "0",
                    "description": "The x-coordinate in the ImageData of the cursor's hot spot.",
                    "name": "hotx",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "The y-coordinate in the ImageData of the cursor's hot spot.",
                    "name": "hoty",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new Cursor object.",
                    "name": "cursor",
                    "type": "Cursor"
                }]
            }, {
                "arguments": [{
                    "description": "Data representing the image to use for the new Cursor.",
                    "name": "fileData",
                    "type": "FileData"
                }, {
                    "default": "0",
                    "description": "The x-coordinate in the ImageData of the cursor's hot spot.",
                    "name": "hotx",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "The y-coordinate in the ImageData of the cursor's hot spot.",
                    "name": "hoty",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new Cursor object.",
                    "name": "cursor",
                    "type": "Cursor"
                }]
            }]
        }, {
            "description": "Sets the current mouse cursor.\n\nResets the current mouse cursor to the default when called without arguments.",
            "name": "setCursor",
            "variants": [[], {
                "arguments": [{
                    "description": "The Cursor object to use as the current mouse cursor.",
                    "name": "cursor",
                    "type": "Cursor"
                }]
            }]
        }, {
            "description": "Grabs the mouse and confines it to the window.",
            "name": "setGrabbed",
            "variants": [{
                "arguments": [{
                    "description": "True to confine the mouse, false to let it leave the window.",
                    "name": "grab",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Sets the position of the mouse.",
            "name": "setPosition",
            "variants": [{
                "arguments": [{
                    "description": "The new position of the mouse along the x-axis.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The new position of the mouse along the y-axis.",
                    "name": "y",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Sets whether relative mode is enabled for the mouse.\n\nWhen relative mode is enabled, the cursor is hidden and doesn't move when the mouse does, but relative mouse motion events are still generated via love.mousemoved. This lets the mouse move in any direction indefinitely without the cursor getting stuck at the edges of the screen.\n\nThe reported position of the mouse is not updated while relative mode is enabled, even when relative mouse motion events are generated.",
            "name": "setRelativeMode",
            "variants": [{
                "arguments": [{
                    "description": "True to enable relative mode, false to disable it.",
                    "name": "enable",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Sets the visibility of the cursor.",
            "name": "setVisible",
            "variants": [{
                "arguments": [{
                    "description": "True to set the cursor to visible, false to hide the cursor.",
                    "name": "visible",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Sets the current X position of the mouse.",
            "name": "setX",
            "variants": [{
                "arguments": [{
                    "description": "The new position of the mouse along the x-axis.",
                    "name": "x",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Sets the current Y position of the mouse.",
            "name": "setY",
            "variants": [{
                "arguments": [{
                    "description": "The new position of the mouse along the y-axis.",
                    "name": "y",
                    "type": "number"
                }]
            }]
        }],
        "name": "mouse",
        "types": [{
            "constructors": ["getSystemCursor", "newCursor"],
            "description": "Represents a hardware cursor.",
            "functions": [{
                "description": "Gets the type of the Cursor.",
                "name": "getType",
                "variants": [{
                    "returns": [{
                        "description": "The type of the Cursor.",
                        "name": "cursortype",
                        "type": "CursorType"
                    }]
                }]
            }],
            "name": "Cursor",
            "supertypes": ["Object"]
        }]
    }, {
        "description": "Can simulate 2D rigid body physics in a realistic manner. This module is based on Box2D, and this API corresponds to the Box2D API as closely as possible.",
        "enums": [{
            "constants": [{
                "description": "Static bodies do not move.",
                "name": "static"
            }, {
                "description": "Dynamic bodies collide with all bodies.",
                "name": "dynamic"
            }, {
                "description": "Kinematic bodies only collide with dynamic bodies.",
                "name": "kinematic"
            }],
            "description": "The types of a Body.",
            "name": "BodyType"
        }, {
            "constants": [{
                "description": "A DistanceJoint.",
                "name": "distance"
            }, {
                "description": "A GearJoint.",
                "name": "gear"
            }, {
                "description": "A MouseJoint.",
                "name": "mouse"
            }, {
                "description": "A PrismaticJoint.",
                "name": "prismatic"
            }, {
                "description": "A PulleyJoint.",
                "name": "pulley"
            }, {
                "description": "A RevoluteJoint.",
                "name": "revolute"
            }, {
                "description": "A FrictionJoint.",
                "name": "friction"
            }, {
                "description": "A WeldJoint.",
                "name": "weld"
            }, {
                "description": "A RopeJoint.",
                "name": "rope"
            }],
            "description": "Different types of joints.",
            "name": "JointType"
        }, {
            "constants": [{
                "description": "The Shape is a CircleShape.",
                "name": "circle"
            }, {
                "description": "The Shape is a PolygonShape.",
                "name": "polygon"
            }, {
                "description": "The Shape is a EdgeShape.",
                "name": "edge"
            }, {
                "description": "The Shape is a ChainShape.",
                "name": "chain"
            }],
            "description": "The different types of Shapes, as returned by Shape:getType.",
            "name": "ShapeType"
        }],
        "functions": [{
            "description": "Returns the two closest points between two fixtures and their distance.",
            "name": "getDistance",
            "variants": [{
                "arguments": [{
                    "description": "The first fixture.",
                    "name": "fixture1",
                    "type": "Fixture"
                }, {
                    "description": "The second fixture.",
                    "name": "fixture2",
                    "type": "Fixture"
                }],
                "returns": [{
                    "description": "The distance of the two points.",
                    "name": "distance",
                    "type": "number"
                }, {
                    "description": "The x-coordinate of the first point.",
                    "name": "x1",
                    "type": "number"
                }, {
                    "description": "The y-coordinate of the first point.",
                    "name": "y1",
                    "type": "number"
                }, {
                    "description": "The x-coordinate of the second point.",
                    "name": "x2",
                    "type": "number"
                }, {
                    "description": "The y-coordinate of the second point.",
                    "name": "y2",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Get the scale of the world.\n\nThe world scale is the number of pixels per meter. Try to keep your shape sizes less than 10 times this scale.\n\nThis is important because the physics in Box2D is tuned to work well for objects of size 0.1m up to 10m. All physics coordinates are divided by this number for the physics calculations.",
            "name": "getMeter",
            "variants": [{
                "returns": [{
                    "description": "The size of 1 meter in pixels.",
                    "name": "scale",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Creates a new body.\n\nThere are three types of bodies. Static bodies do not move, have a infinite mass, and can be used for level boundaries. Dynamic bodies are the main actors in the simulation, they collide with everything. Kinematic bodies do not react to forces and only collide with dynamic bodies.\n\nThe mass of the body gets calculated when a Fixture is attached or removed, but can be changed at any time with Body:setMass or Body:resetMassData.",
            "name": "newBody",
            "variants": [{
                "arguments": [{
                    "description": "The world to create the body in.",
                    "name": "world",
                    "type": "World"
                }, {
                    "default": "0",
                    "description": "The x position of the body.",
                    "name": "x",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "The y position of the body.",
                    "name": "y",
                    "type": "number"
                }, {
                    "default": "\"static\"",
                    "description": "The type of the body.",
                    "name": "type",
                    "type": "BodyType"
                }],
                "returns": [{
                    "description": "A new body.",
                    "name": "body",
                    "type": "Body"
                }]
            }]
        }, {
            "description": "Creates a new ChainShape.",
            "name": "newChainShape",
            "variants": [{
                "arguments": [{
                    "description": "If the chain should loop back to the first point.",
                    "name": "loop",
                    "type": "boolean"
                }, {
                    "description": "The x position of the first point.",
                    "name": "x1",
                    "type": "number"
                }, {
                    "description": "The y position of the first point.",
                    "name": "y1",
                    "type": "number"
                }, {
                    "description": "The x position of the second point.",
                    "name": "x2",
                    "type": "number"
                }, {
                    "description": "The y position of the second point.",
                    "name": "y2",
                    "type": "number"
                }, {
                    "description": "Additional point positions.",
                    "name": "...",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new shape.",
                    "name": "shape",
                    "type": "ChainShape"
                }]
            }, {
                "arguments": [{
                    "description": "If the chain should loop back to the first point.",
                    "name": "loop",
                    "type": "boolean"
                }, {
                    "description": "A list of points to construct the ChainShape, in the form of {x1, y1, x2, y2, ...}.",
                    "name": "points",
                    "type": "table"
                }],
                "returns": [{
                    "description": "The new shape.",
                    "name": "shape",
                    "type": "ChainShape"
                }]
            }]
        }, {
            "description": "Creates a new CircleShape.",
            "name": "newCircleShape",
            "variants": [{
                "arguments": [{
                    "description": "The radius of the circle.",
                    "name": "radius",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new shape.",
                    "name": "shape",
                    "type": "CircleShape"
                }]
            }, {
                "arguments": [{
                    "description": "The x offset of the circle.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The y offset of the circle.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "The radius of the circle.",
                    "name": "radius",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new shape.",
                    "name": "shape",
                    "type": "CircleShape"
                }]
            }]
        }, {
            "description": "Create a distance joint between two bodies.\n\nThis joint constrains the distance between two points on two bodies to be constant. These two points are specified in world coordinates and the two bodies are assumed to be in place when this joint is created. The first anchor point is connected to the first body and the second to the second body, and the points define the length of the distance joint.",
            "name": "newDistanceJoint",
            "variants": [{
                "arguments": [{
                    "description": "The first body to attach to the joint.",
                    "name": "body1",
                    "type": "Body"
                }, {
                    "description": "The second body to attach to the joint.",
                    "name": "body2",
                    "type": "Body"
                }, {
                    "description": "The x position of the first anchor point (world space).",
                    "name": "x1",
                    "type": "number"
                }, {
                    "description": "The y position of the first anchor point (world space).",
                    "name": "y1",
                    "type": "number"
                }, {
                    "description": "The x position of the second anchor point (world space).",
                    "name": "x2",
                    "type": "number"
                }, {
                    "description": "The y position of the second anchor point (world space).",
                    "name": "y2",
                    "type": "number"
                }, {
                    "default": "false",
                    "description": "Specifies whether the two bodies should collide with each other.",
                    "name": "collideConnected",
                    "type": "boolean"
                }],
                "returns": [{
                    "description": "The new distance joint.",
                    "name": "joint",
                    "type": "DistanceJoint"
                }]
            }]
        }, {
            "description": "Creates a edge shape.",
            "name": "newEdgeShape",
            "variants": [{
                "arguments": [{
                    "description": "The x position of the first point.",
                    "name": "x1",
                    "type": "number"
                }, {
                    "description": "The y position of the first point.",
                    "name": "y1",
                    "type": "number"
                }, {
                    "description": "The x position of the second point.",
                    "name": "x2",
                    "type": "number"
                }, {
                    "description": "The y position of the second point.",
                    "name": "y2",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new shape.",
                    "name": "shape",
                    "type": "EdgeShape"
                }]
            }]
        }, {
            "description": "Creates and attaches a Fixture to a body.",
            "name": "newFixture",
            "variants": [{
                "arguments": [{
                    "description": "The body which gets the fixture attached.",
                    "name": "body",
                    "type": "Body"
                }, {
                    "description": "The shape of the fixture.",
                    "name": "shape",
                    "type": "Shape"
                }, {
                    "default": "1",
                    "description": "The density of the fixture.",
                    "name": "density",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new fixture.",
                    "name": "fixture",
                    "type": "Fixture"
                }]
            }]
        }, {
            "description": "Create a friction joint between two bodies. A FrictionJoint applies friction to a body.",
            "name": "newFrictionJoint",
            "variants": [{
                "arguments": [{
                    "description": "The first body to attach to the joint.",
                    "name": "body1",
                    "type": "Body"
                }, {
                    "description": "The second body to attach to the joint.",
                    "name": "body2",
                    "type": "Body"
                }, {
                    "description": "The x position of the anchor point.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The y position of the anchor point.",
                    "name": "y",
                    "type": "number"
                }, {
                    "default": "false",
                    "description": "Specifies whether the two bodies should collide with eachother.",
                    "name": "collideConnected",
                    "type": "boolean"
                }],
                "returns": [{
                    "description": "The new FrictionJoint.",
                    "name": "joint",
                    "type": "FrictionJoint"
                }]
            }]
        }, {
            "description": "Create a gear joint connecting two joints.\n\nThe gear joint connects two joints that must be either prismatic or revolute joints. Using this joint requires that the joints it uses connect their respective bodies to the ground and have the ground as the first body. When destroying the bodies and joints you must make sure you destroy the gear joint before the other joints.\n\nThe gear joint has a ratio the determines how the angular or distance values of the connected joints relate to each other. The formula coordinate1 + ratio * coordinate2 always has a constant value that is set when the gear joint is created.",
            "name": "newGearJoint",
            "variants": [{
                "arguments": [{
                    "description": "The first joint to connect with a gear joint.",
                    "name": "joint1",
                    "type": "Joint"
                }, {
                    "description": "The second joint to connect with a gear joint.",
                    "name": "joint2",
                    "type": "Joint"
                }, {
                    "default": "1",
                    "description": "The gear ratio.",
                    "name": "ratio",
                    "type": "number"
                }, {
                    "default": "false",
                    "description": "Specifies whether the two bodies should collide with each other.",
                    "name": "collideConnected",
                    "type": "boolean"
                }],
                "returns": [{
                    "description": "The new gear joint.",
                    "name": "joint",
                    "type": "Joint"
                }]
            }]
        }, {
            "description": "Creates a joint between two bodies which controls the relative motion between them.\n\nPosition and rotation offsets can be specified once the MotorJoint has been created, as well as the maximum motor force and torque that will be be applied to reach the target offsets.",
            "name": "newMotorJoint",
            "variants": [{
                "arguments": [{
                    "description": "The first body to attach to the joint.",
                    "name": "body1",
                    "type": "Body"
                }, {
                    "description": "The second body to attach to the joint.",
                    "name": "body2",
                    "type": "Body"
                }, {
                    "default": "0.3",
                    "description": "The joint's initial position correction factor, in the range of [0, 1].",
                    "name": "correctionFactor",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new MotorJoint.",
                    "name": "joint",
                    "type": "MotorJoint"
                }]
            }, {
                "arguments": [{
                    "description": "The first body to attach to the joint.",
                    "name": "body1",
                    "type": "Body"
                }, {
                    "description": "The second body to attach to the joint.",
                    "name": "body2",
                    "type": "Body"
                }, {
                    "default": "0.3",
                    "description": "The joint's initial position correction factor, in the range of [0, 1].",
                    "name": "correctionFactor",
                    "type": "number"
                }, {
                    "default": "false",
                    "description": "Specifies whether the two bodies should collide with each other.",
                    "name": "collideConnected",
                    "type": "boolean"
                }],
                "returns": [{
                    "description": "The new MotorJoint.",
                    "name": "joint",
                    "type": "MotorJoint"
                }]
            }]
        }, {
            "description": "Create a joint between a body and the mouse.\n\nThis joint actually connects the body to a fixed point in the world. To make it follow the mouse, the fixed point must be updated every timestep (example below).\n\nThe advantage of using a MouseJoint instead of just changing a body position directly is that collisions and reactions to other joints are handled by the physics engine.",
            "name": "newMouseJoint",
            "variants": [{
                "arguments": [{
                    "description": "The body to attach to the mouse.",
                    "name": "body",
                    "type": "Body"
                }, {
                    "description": "The x position of the connecting point.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The y position of the connecting point.",
                    "name": "y",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new mouse joint.",
                    "name": "joint",
                    "type": "Joint"
                }]
            }]
        }, {
            "description": "Creates a new PolygonShape.\n\nThis shape can have 8 vertices at most, and must form a convex shape.",
            "name": "newPolygonShape",
            "variants": [{
                "arguments": [{
                    "description": "The position of first point on the x-axis.",
                    "name": "x1",
                    "type": "number"
                }, {
                    "description": "The position of first point on the y-axis.",
                    "name": "y1",
                    "type": "number"
                }, {
                    "description": "The position of second point on the x-axis.",
                    "name": "x2",
                    "type": "number"
                }, {
                    "description": "The position of second point on the y-axis.",
                    "name": "y2",
                    "type": "number"
                }, {
                    "description": "You can continue passing more point positions to create the PolygonShape.",
                    "name": "...",
                    "type": "number"
                }],
                "returns": [{
                    "description": "A new PolygonShape.",
                    "name": "shape",
                    "type": "PolygonShape"
                }]
            }, {
                "arguments": [{
                    "description": "A list of vertices to construct the polygon, in the form of {x1, y1, x2, y2, x3, y3, ...}.",
                    "name": "vertices",
                    "type": "table"
                }],
                "returns": [{
                    "description": "A new PolygonShape.",
                    "name": "shape",
                    "type": "PolygonShape"
                }]
            }]
        }, {
            "description": "Create a prismatic joints between two bodies.\n\nA prismatic joint constrains two bodies to move relatively to each other on a specified axis. It does not allow for relative rotation. Its definition and operation are similar to a revolute joint, but with translation and force substituted for angle and torque.",
            "name": "newPrismaticJoint",
            "variants": [{
                "arguments": [{
                    "description": "The first body to connect with a prismatic joint.",
                    "name": "body1",
                    "type": "Body"
                }, {
                    "description": "The second body to connect with a prismatic joint.",
                    "name": "body2",
                    "type": "Body"
                }, {
                    "description": "The x coordinate of the anchor point.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The y coordinate of the anchor point.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "The x coordinate of the axis unit vector.",
                    "name": "ax",
                    "type": "number"
                }, {
                    "description": "The y coordinate of the axis unit vector.",
                    "name": "ay",
                    "type": "number"
                }, {
                    "default": "false",
                    "description": "Specifies whether the two bodies should collide with each other.",
                    "name": "collideConnected",
                    "type": "boolean"
                }],
                "returns": [{
                    "description": "The new prismatic joint.",
                    "name": "joint",
                    "type": "PrismaticJoint"
                }]
            }, {
                "arguments": [{
                    "description": "The first body to connect with a prismatic joint.",
                    "name": "body1",
                    "type": "Body"
                }, {
                    "description": "The second body to connect with a prismatic joint.",
                    "name": "body2",
                    "type": "Body"
                }, {
                    "description": "The x coordinate of the first anchor point.",
                    "name": "x1",
                    "type": "number"
                }, {
                    "description": "The y coordinate of the first anchor point.",
                    "name": "y1",
                    "type": "number"
                }, {
                    "description": "The x coordinate of the second anchor point.",
                    "name": "x2",
                    "type": "number"
                }, {
                    "description": "The y coordinate of the second anchor point.",
                    "name": "y2",
                    "type": "number"
                }, {
                    "description": "The x coordinate of the axis unit vector.",
                    "name": "ax",
                    "type": "number"
                }, {
                    "description": "The y coordinate of the axis unit vector.",
                    "name": "ay",
                    "type": "number"
                }, {
                    "default": "false",
                    "description": "Specifies whether the two bodies should collide with each other.",
                    "name": "collideConnected",
                    "type": "boolean"
                }],
                "returns": [{
                    "description": "The new prismatic joint.",
                    "name": "joint",
                    "type": "PrismaticJoint"
                }]
            }, {
                "arguments": [{
                    "description": "The first body to connect with a prismatic joint.",
                    "name": "body1",
                    "type": "Body"
                }, {
                    "description": "The second body to connect with a prismatic joint.",
                    "name": "body2",
                    "type": "Body"
                }, {
                    "description": "The x coordinate of the first anchor point.",
                    "name": "x1",
                    "type": "number"
                }, {
                    "description": "The y coordinate of the first anchor point.",
                    "name": "y1",
                    "type": "number"
                }, {
                    "description": "The x coordinate of the second anchor point.",
                    "name": "x2",
                    "type": "number"
                }, {
                    "description": "The y coordinate of the second anchor point.",
                    "name": "y2",
                    "type": "number"
                }, {
                    "description": "The x coordinate of the axis unit vector.",
                    "name": "ax",
                    "type": "number"
                }, {
                    "description": "The y coordinate of the axis unit vector.",
                    "name": "ay",
                    "type": "number"
                }, {
                    "default": "false",
                    "description": "Specifies whether the two bodies should collide with each other.",
                    "name": "collideConnected",
                    "type": "boolean"
                }, {
                    "default": "0",
                    "description": "The reference angle between body1 and body2, in radians.",
                    "name": "referenceAngle",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new prismatic joint.",
                    "name": "joint",
                    "type": "PrismaticJoint"
                }]
            }]
        }, {
            "description": "Create a pulley joint to join two bodies to each other and the ground.\n\nThe pulley joint simulates a pulley with an optional block and tackle. If the ratio parameter has a value different from one, then the simulated rope extends faster on one side than the other. In a pulley joint the total length of the simulated rope is the constant length1 + ratio * length2, which is set when the pulley joint is created.\n\nPulley joints can behave unpredictably if one side is fully extended. It is recommended that the method setMaxLengths  be used to constrain the maximum lengths each side can attain.",
            "name": "newPulleyJoint",
            "variants": [{
                "arguments": [{
                    "description": "The first body to connect with a pulley joint.",
                    "name": "body1",
                    "type": "Body"
                }, {
                    "description": "The second body to connect with a pulley joint.",
                    "name": "body2",
                    "type": "Body"
                }, {
                    "description": "The x coordinate of the first body's ground anchor.",
                    "name": "gx1",
                    "type": "number"
                }, {
                    "description": "The y coordinate of the first body's ground anchor.",
                    "name": "gy1",
                    "type": "number"
                }, {
                    "description": "The x coordinate of the second body's ground anchor.",
                    "name": "gx2",
                    "type": "number"
                }, {
                    "description": "The y coordinate of the second body's ground anchor.",
                    "name": "gy2",
                    "type": "number"
                }, {
                    "description": "The x coordinate of the pulley joint anchor in the first body.",
                    "name": "x1",
                    "type": "number"
                }, {
                    "description": "The y coordinate of the pulley joint anchor in the first body.",
                    "name": "y1",
                    "type": "number"
                }, {
                    "description": "The x coordinate of the pulley joint anchor in the second body.",
                    "name": "x2",
                    "type": "number"
                }, {
                    "description": "The y coordinate of the pulley joint anchor in the second body.",
                    "name": "y2",
                    "type": "number"
                }, {
                    "default": "1",
                    "description": "The joint ratio.",
                    "name": "ratio",
                    "type": "number"
                }, {
                    "default": "true",
                    "description": "Specifies whether the two bodies should collide with each other.",
                    "name": "collideConnected",
                    "type": "boolean"
                }],
                "returns": [{
                    "description": "The new pulley joint.",
                    "name": "joint",
                    "type": "Joint"
                }]
            }]
        }, {
            "description": "Shorthand for creating rectangluar PolygonShapes.\n\nBy default, the local origin is located at the center of the rectangle as opposed to the top left for graphics.",
            "name": "newRectangleShape",
            "variants": [{
                "arguments": [{
                    "description": "The width of the rectangle.",
                    "name": "width",
                    "type": "number"
                }, {
                    "description": "The height of the rectangle.",
                    "name": "height",
                    "type": "number"
                }],
                "returns": [{
                    "description": "A new PolygonShape.",
                    "name": "shape",
                    "type": "PolygonShape"
                }]
            }, {
                "arguments": [{
                    "description": "The offset along the x-axis.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The offset along the y-axis.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "The width of the rectangle.",
                    "name": "width",
                    "type": "number"
                }, {
                    "description": "The height of the rectangle.",
                    "name": "height",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "The initial angle of the rectangle.",
                    "name": "angle",
                    "type": "number"
                }],
                "returns": [{
                    "description": "A new PolygonShape.",
                    "name": "shape",
                    "type": "PolygonShape"
                }]
            }]
        }, {
            "description": "Creates a pivot joint between two bodies.\n\nThis joint connects two bodies to a point around which they can pivot.",
            "name": "newRevoluteJoint",
            "variants": [{
                "arguments": [{
                    "description": "The first body.",
                    "name": "body1",
                    "type": "Body"
                }, {
                    "description": "The second body.",
                    "name": "body2",
                    "type": "Body"
                }, {
                    "description": "The x position of the connecting point.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The y position of the connecting point.",
                    "name": "y",
                    "type": "number"
                }, {
                    "default": "false",
                    "description": "Specifies whether the two bodies should collide with each other.",
                    "name": "collideConnected",
                    "type": "boolean"
                }],
                "returns": [{
                    "description": "The new revolute joint.",
                    "name": "joint",
                    "type": "Joint"
                }]
            }, {
                "arguments": [{
                    "description": "The first body.",
                    "name": "body1",
                    "type": "Body"
                }, {
                    "description": "The second body.",
                    "name": "body2",
                    "type": "Body"
                }, {
                    "description": "The x position of the connecting point.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The y position of the connecting point.",
                    "name": "y",
                    "type": "number"
                }, {
                    "default": "false",
                    "description": "Specifies whether the two bodies should collide with each other.",
                    "name": "collideConnected",
                    "type": "boolean"
                }, {
                    "default": "0",
                    "description": "Specifies whether the two bodies should collide with each other.",
                    "name": "referenceAngle",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new revolute joint.",
                    "name": "joint",
                    "type": "Joint"
                }]
            }]
        }, {
            "description": "Create a joint between two bodies. Its only function is enforcing a max distance between these bodies.",
            "name": "newRopeJoint",
            "variants": [{
                "arguments": [{
                    "description": "The first body to attach to the joint.",
                    "name": "body1",
                    "type": "Body"
                }, {
                    "description": "The second body to attach to the joint.",
                    "name": "body2",
                    "type": "Body"
                }, {
                    "description": "The x position of the first anchor point.",
                    "name": "x1",
                    "type": "number"
                }, {
                    "description": "The y position of the first anchor point.",
                    "name": "y1",
                    "type": "number"
                }, {
                    "description": "The x position of the second anchor point.",
                    "name": "x2",
                    "type": "number"
                }, {
                    "description": "The y position of the second anchor point.",
                    "name": "y2",
                    "type": "number"
                }, {
                    "description": "The maximum distance for the bodies.",
                    "name": "maxLength",
                    "type": "number"
                }, {
                    "default": "false",
                    "description": "Specifies whether the two bodies should collide with each other.",
                    "name": "collideConnected",
                    "type": "boolean"
                }],
                "returns": [{
                    "description": "The new RopeJoint.",
                    "name": "joint",
                    "type": "RopeJoint"
                }]
            }]
        }, {
            "description": "Creates a constraint joint between two bodies. A WeldJoint essentially glues two bodies together. The constraint is a bit soft, however, due to Box2D's iterative solver.",
            "name": "newWeldJoint",
            "variants": [{
                "arguments": [{
                    "description": "The first body to attach to the joint.",
                    "name": "body1",
                    "type": "Body"
                }, {
                    "description": "The second body to attach to the joint.",
                    "name": "body2",
                    "type": "Body"
                }, {
                    "description": "The x position of the anchor point (world space).",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The y position of the anchor point (world space).",
                    "name": "y",
                    "type": "number"
                }, {
                    "default": "false",
                    "description": "Specifies whether the two bodies should collide with each other.",
                    "name": "collideConnected",
                    "type": "boolean"
                }],
                "returns": [{
                    "description": "The new WeldJoint.",
                    "name": "joint",
                    "type": "WeldJoint"
                }]
            }, {
                "arguments": [{
                    "description": "The first body to attach to the joint.",
                    "name": "body1",
                    "type": "Body"
                }, {
                    "description": "The second body to attach to the joint.",
                    "name": "body2",
                    "type": "Body"
                }, {
                    "description": "The x position of the first anchor point (world space).",
                    "name": "x1",
                    "type": "number"
                }, {
                    "description": "The y position of the first anchor point (world space).",
                    "name": "y1",
                    "type": "number"
                }, {
                    "description": "The x position of the second anchor point (world space).",
                    "name": "x2",
                    "type": "number"
                }, {
                    "description": "The y position of the second anchor point (world space).",
                    "name": "y2",
                    "type": "number"
                }, {
                    "default": "false",
                    "description": "Specifies whether the two bodies should collide with each other.",
                    "name": "collideConnected",
                    "type": "boolean"
                }],
                "returns": [{
                    "description": "The new WeldJoint.",
                    "name": "joint",
                    "type": "WeldJoint"
                }]
            }, {
                "arguments": [{
                    "description": "The first body to attach to the joint.",
                    "name": "body1",
                    "type": "Body"
                }, {
                    "description": "The second body to attach to the joint.",
                    "name": "body2",
                    "type": "Body"
                }, {
                    "description": "The x position of the first anchor point (world space).",
                    "name": "x1",
                    "type": "number"
                }, {
                    "description": "The y position of the first anchor point (world space).",
                    "name": "y1",
                    "type": "number"
                }, {
                    "description": "The x position of the second anchor point (world space).",
                    "name": "x2",
                    "type": "number"
                }, {
                    "description": "The y position of the second anchor point (world space).",
                    "name": "y2",
                    "type": "number"
                }, {
                    "default": "false",
                    "description": "Specifies whether the two bodies should collide with each other.",
                    "name": "collideConnected",
                    "type": "boolean"
                }, {
                    "default": "0",
                    "description": "The reference angle between body1 and body2, in radians.",
                    "name": "referenceAngle",
                    "type": "number"
                }],
                "returns": [{
                    "description": "The new WeldJoint.",
                    "name": "joint",
                    "type": "WeldJoint"
                }]
            }]
        }, {
            "description": "Creates a wheel joint.",
            "name": "newWheelJoint",
            "variants": [{
                "arguments": [{
                    "description": "The first body.",
                    "name": "body1",
                    "type": "Body"
                }, {
                    "description": "The second body.",
                    "name": "body2",
                    "type": "Body"
                }, {
                    "description": "The x position of the anchor point.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The y position of the anchor point.",
                    "name": "y",
                    "type": "number"
                }, {
                    "description": "The x position of the axis unit vector.",
                    "name": "ax",
                    "type": "number"
                }, {
                    "description": "The y position of the axis unit vector.",
                    "name": "ay",
                    "type": "number"
                }, {
                    "default": "false",
                    "description": "Specifies whether the two bodies should collide with each other.",
                    "name": "collideConnected",
                    "type": "boolean"
                }],
                "returns": [{
                    "description": "The new WheelJoint.",
                    "name": "joint",
                    "type": "WheelJoint"
                }]
            }]
        }, {
            "description": "Creates a new World.",
            "name": "newWorld",
            "variants": [{
                "arguments": [{
                    "default": "0",
                    "description": "The x component of gravity.",
                    "name": "xg",
                    "type": "number"
                }, {
                    "default": "0",
                    "description": "The y component of gravity.",
                    "name": "yg",
                    "type": "number"
                }, {
                    "default": "true",
                    "description": "Whether the bodies in this world are allowed to sleep.",
                    "name": "sleep",
                    "type": "boolean"
                }],
                "returns": [{
                    "description": "A brave new World.",
                    "name": "world",
                    "type": "World"
                }]
            }]
        }, {
            "description": "Sets the pixels to meter scale factor.\n\nAll coordinates in the physics module are divided by this number and converted to meters, and it creates a convenient way to draw the objects directly to the screen without the need for graphics transformations.\n\nIt is recommended to create shapes no larger than 10 times the scale. This is important because Box2D is tuned to work well with shape sizes from 0.1 to 10 meters. The default meter scale is 30.\n\nlove.physics.setMeter does not apply retroactively to created objects. Created objects retain their meter coordinates but the scale factor will affect their pixel coordinates.",
            "name": "setMeter",
            "variants": [{
                "arguments": [{
                    "description": "The scale factor as an integer.",
                    "name": "scale",
                    "type": "number"
                }]
            }]
        }],
        "name": "physics",
        "types": [{
            "constructors": ["newBody"],
            "description": "Bodies are objects with velocity and position.",
            "functions": [{
                "description": "Applies an angular impulse to a body. This makes a single, instantaneous addition to the body momentum.\n\nA body with with a larger mass will react less. The reaction does not depend on the timestep, and is equivalent to applying a force continuously for 1 second. Impulses are best used to give a single push to a body. For a continuous push to a body it is better to use Body:applyForce.",
                "name": "applyAngularImpulse",
                "variants": [{
                    "arguments": [{
                        "description": "The impulse in kilogram-square meter per second.",
                        "name": "impulse",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Apply force to a Body.\n\nA force pushes a body in a direction. A body with with a larger mass will react less. The reaction also depends on how long a force is applied: since the force acts continuously over the entire timestep, a short timestep will only push the body for a short time. Thus forces are best used for many timesteps to give a continuous push to a body (like gravity). For a single push that is independent of timestep, it is better to use Body:applyLinearImpulse.\n\nIf the position to apply the force is not given, it will act on the center of mass of the body. The part of the force not directed towards the center of mass will cause the body to spin (and depends on the rotational inertia).\n\nNote that the force components and position must be given in world coordinates.",
                "name": "applyForce",
                "variants": [{
                    "arguments": [{
                        "description": "The x component of force to apply to the center of mass.",
                        "name": "fx",
                        "type": "number"
                    }, {
                        "description": "The y component of force to apply to the center of mass.",
                        "name": "fy",
                        "type": "number"
                    }]
                }, {
                    "arguments": [{
                        "description": "The x component of force to apply.",
                        "name": "fx",
                        "type": "number"
                    }, {
                        "description": "The y component of force to apply.",
                        "name": "fy",
                        "type": "number"
                    }, {
                        "description": "The x position to apply the force.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y position to apply the force.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Applies an impulse to a body. This makes a single, instantaneous addition to the body momentum.\n\nAn impulse pushes a body in a direction. A body with with a larger mass will react less. The reaction does not depend on the timestep, and is equivalent to applying a force continuously for 1 second. Impulses are best used to give a single push to a body. For a continuous push to a body it is better to use Body:applyForce.\n\nIf the position to apply the impulse is not given, it will act on the center of mass of the body. The part of the impulse not directed towards the center of mass will cause the body to spin (and depends on the rotational inertia).\n\nNote that the impulse components and position must be given in world coordinates.",
                "name": "applyLinearImpulse",
                "variants": [{
                    "arguments": [{
                        "description": "The x component of the impulse applied to the center of mass.",
                        "name": "ix",
                        "type": "number"
                    }, {
                        "description": "The y component of the impulse applied to the center of mass.",
                        "name": "iy",
                        "type": "number"
                    }]
                }, {
                    "arguments": [{
                        "description": "The x component of the impulse.",
                        "name": "ix",
                        "type": "number"
                    }, {
                        "description": "The y component of the impulse.",
                        "name": "iy",
                        "type": "number"
                    }, {
                        "description": "The x position to apply the impulse.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y position to apply the impulse.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Apply torque to a body.\n\nTorque is like a force that will change the angular velocity (spin) of a body. The effect will depend on the rotational inertia a body has.",
                "name": "applyTorque",
                "variants": [{
                    "arguments": [{
                        "description": "The torque to apply.",
                        "name": "torque",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Explicitly destroys the Body. When you don't have time to wait for garbage collection, this function may be used to free the object immediately, but note that an error will occur if you attempt to use the object after calling this function.",
                "name": "destroy",
                "variants": [[]]
            }, {
                "description": "Get the angle of the body.\n\nThe angle is measured in radians. If you need to transform it to degrees, use math.deg.\n\nA value of 0 radians will mean \"looking to the right\". Although radians increase counter-clockwise, the y-axis points down so it becomes clockwise from our point of view.",
                "name": "getAngle",
                "variants": [{
                    "returns": [{
                        "description": "The angle in radians.",
                        "name": "angle",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the Angular damping of the Body\n\nThe angular damping is the rate of decrease of the angular velocity over time: A spinning body with no damping and no external forces will continue spinning indefinitely. A spinning body with damping will gradually stop spinning.\n\nDamping is not the same as friction - they can be modelled together. However, only damping is provided by Box2D (and LÖVE).\n\nDamping parameters should be between 0 and infinity, with 0 meaning no damping, and infinity meaning full damping. Normally you will use a damping value between 0 and 0.1.",
                "name": "getAngularDamping",
                "variants": [{
                    "returns": [{
                        "description": "The value of the angular damping.",
                        "name": "damping",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the angular velocity of the Body.\n\nThe angular velocity is the rate of change of angle over time.\n\nIt is changed in World:update by applying torques, off centre forces/impulses, and angular damping. It can be set directly with Body:setAngularVelocity.\n\nIf you need the rate of change of position over time, use Body:getLinearVelocity.",
                "name": "getAngularVelocity",
                "variants": [{
                    "returns": [{
                        "description": "The angular velocity in radians/second.",
                        "name": "w",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets a list of all Contacts attached to the Body.",
                "name": "getContactList",
                "variants": [{
                    "returns": [{
                        "description": "A list with all contacts associated with the Body.",
                        "name": "contacts",
                        "type": "table"
                    }]
                }]
            }, {
                "description": "Returns a table with all fixtures.",
                "name": "getFixtureList",
                "variants": [{
                    "returns": [{
                        "description": "A sequence with all fixtures.",
                        "name": "fixtures",
                        "type": "table"
                    }]
                }]
            }, {
                "description": "Returns the gravity scale factor.",
                "name": "getGravityScale",
                "variants": [{
                    "returns": [{
                        "description": "The gravity scale factor.",
                        "name": "scale",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the rotational inertia of the body.\n\nThe rotational inertia is how hard is it to make the body spin. It is set with the 4th argument to Body:setMass, or automatically with Body:setMassFromShapes.",
                "name": "getInertia",
                "variants": [{
                    "returns": [{
                        "description": "The rotational inertial of the body.",
                        "name": "inertia",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns a table containing the Joints attached to this Body.",
                "name": "getJointList",
                "variants": [{
                    "returns": [{
                        "description": "A sequence with the Joints attached to the Body.",
                        "name": "joints",
                        "type": "table"
                    }]
                }]
            }, {
                "description": "Gets the linear damping of the Body.\n\nThe linear damping is the rate of decrease of the linear velocity over time. A moving body with no damping and no external forces will continue moving indefinitely, as is the case in space. A moving body with damping will gradually stop moving.\n\nDamping is not the same as friction - they can be modelled together. However, only damping is provided by Box2D (and LÖVE).",
                "name": "getLinearDamping",
                "variants": [{
                    "returns": [{
                        "description": "The value of the linear damping.",
                        "name": "damping",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the linear velocity of the Body from its center of mass.\n\nThe linear velocity is the rate of change of position over time.\n\nIf you need the rate of change of angle over time, use Body:getAngularVelocity. If you need to get the linear velocity of a point different from the center of mass:\n\nBody:getLinearVelocityFromLocalPoint allows you to specify the point in local coordinates.\n\nBody:getLinearVelocityFromWorldPoint allows you to specify the point in world coordinates.",
                "name": "getLinearVelocity",
                "variants": [{
                    "returns": [{
                        "description": "The x component of the velocity vector.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y component of the velocity vector.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the linear velocity of a point on the body.\n\nThe linear velocity for a point on the body is the velocity of the body center of mass plus the velocity at that point from the body spinning.\n\nThe point on the body must given in local coordinates. Use Body:getLinearVelocityFromWorldPoint to specify this with world coordinates.",
                "name": "getLinearVelocityFromLocalPoint",
                "variants": [{
                    "arguments": [{
                        "description": "The x position to measure velocity.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y position to measure velocity.",
                        "name": "y",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The x component of velocity at point (x,y).",
                        "name": "vx",
                        "type": "number"
                    }, {
                        "description": "The y component of velocity at point (x,y).",
                        "name": "vy",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the linear velocity of a point on the body.\n\nThe linear velocity for a point on the body is the velocity of the body center of mass plus the velocity at that point from the body spinning.\n\nThe point on the body must given in world coordinates. Use Body:getLinearVelocityFromLocalPoint to specify this with local coordinates.",
                "name": "getLinearVelocityFromWorldPoint",
                "variants": [{
                    "arguments": [{
                        "description": "The x position to measure velocity.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y position to measure velocity.",
                        "name": "y",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The x component of velocity at point (x,y).",
                        "name": "vx",
                        "type": "number"
                    }, {
                        "description": "The y component of velocity at point (x,y).",
                        "name": "vy",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the center of mass position in local coordinates.\n\nUse Body:getWorldCenter to get the center of mass in world coordinates.",
                "name": "getLocalCenter",
                "variants": [{
                    "returns": [{
                        "description": "The x coordinate of the center of mass.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y coordinate of the center of mass.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Transform a point from world coordinates to local coordinates.",
                "name": "getLocalPoint",
                "variants": [{
                    "arguments": [{
                        "description": "The x position in world coordinates.",
                        "name": "worldX",
                        "type": "number"
                    }, {
                        "description": "The y position in world coordinates.",
                        "name": "worldY",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The x position in local coordinates.",
                        "name": "localX",
                        "type": "number"
                    }, {
                        "description": "The y position in local coordinates.",
                        "name": "localY",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Transform a vector from world coordinates to local coordinates.",
                "name": "getLocalVector",
                "variants": [{
                    "arguments": [{
                        "description": "The vector x component in world coordinates.",
                        "name": "worldX",
                        "type": "number"
                    }, {
                        "description": "The vector y component in world coordinates.",
                        "name": "worldY",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The vector x component in local coordinates.",
                        "name": "localX",
                        "type": "number"
                    }, {
                        "description": "The vector y component in local coordinates.",
                        "name": "localY",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the mass of the body.",
                "name": "getMass",
                "variants": [{
                    "returns": [{
                        "description": "The mass of the body (in kilograms).",
                        "name": "mass",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the mass, its center, and the rotational inertia.",
                "name": "getMassData",
                "variants": [{
                    "returns": [{
                        "description": "The x position of the center of mass.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y position of the center of mass.",
                        "name": "y",
                        "type": "number"
                    }, {
                        "description": "The mass of the body.",
                        "name": "mass",
                        "type": "number"
                    }, {
                        "description": "The rotational inertia.",
                        "name": "inertia",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the position of the body.\n\nNote that this may not be the center of mass of the body.",
                "name": "getPosition",
                "variants": [{
                    "returns": [{
                        "description": "The x position.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y position.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the type of the body.",
                "name": "getType",
                "variants": [{
                    "returns": [{
                        "description": "The body type.",
                        "name": "type",
                        "type": "BodyType"
                    }]
                }]
            }, {
                "description": "Returns the Lua value associated with this Body.\n\nUse this function in one thread only.",
                "name": "getUserData",
                "variants": [{
                    "returns": [{
                        "description": "The Lua value associated with the Body.",
                        "name": "value",
                        "type": "value"
                    }]
                }]
            }, {
                "description": "Gets the World the body lives in.",
                "name": "getWorld",
                "variants": [{
                    "returns": [{
                        "description": "The world the body lives in.",
                        "name": "world",
                        "type": "World"
                    }]
                }]
            }, {
                "description": "Get the center of mass position in world coordinates.\n\nUse Body:getLocalCenter to get the center of mass in local coordinates.",
                "name": "getWorldCenter",
                "variants": [{
                    "returns": [{
                        "description": "The x coordinate of the center of mass.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y coordinate of the center of mass.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Transform a point from local coordinates to world coordinates.",
                "name": "getWorldPoint",
                "variants": [{
                    "arguments": [{
                        "description": "The x position in local coordinates.",
                        "name": "localX",
                        "type": "number"
                    }, {
                        "description": "The y position in local coordinates.",
                        "name": "localY",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The x position in world coordinates.",
                        "name": "worldX",
                        "type": "number"
                    }, {
                        "description": "The y position in world coordinates.",
                        "name": "worldY",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Transforms multiple points from local coordinates to world coordinates.",
                "name": "getWorldPoints",
                "variants": [{
                    "arguments": [{
                        "description": "The x position of the first point.",
                        "name": "x1",
                        "type": "number"
                    }, {
                        "description": "The y position of the first point.",
                        "name": "y1",
                        "type": "number"
                    }, {
                        "description": "The x position of the second point.",
                        "name": "x2",
                        "type": "number"
                    }, {
                        "description": "The y position of the second point.",
                        "name": "y2",
                        "type": "number"
                    }, {
                        "description": "More x and y points.",
                        "name": "...",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The transformed x position of the first point.",
                        "name": "x1",
                        "type": "number"
                    }, {
                        "description": "The transformed y position of the first point.",
                        "name": "y1",
                        "type": "number"
                    }, {
                        "description": "The transformed x position of the second point.",
                        "name": "x2",
                        "type": "number"
                    }, {
                        "description": "The transformed y position of the second point.",
                        "name": "y2",
                        "type": "number"
                    }, {
                        "description": "The transformed x and y positions of additional points.",
                        "name": "...",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Transform a vector from local coordinates to world coordinates.",
                "name": "getWorldVector",
                "variants": [{
                    "arguments": [{
                        "description": "The vector x component in local coordinates.",
                        "name": "localX",
                        "type": "number"
                    }, {
                        "description": "The vector y component in local coordinates.",
                        "name": "localY",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The vector x component in world coordinates.",
                        "name": "worldX",
                        "type": "number"
                    }, {
                        "description": "The vector y component in world coordinates.",
                        "name": "worldY",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the x position of the body in world coordinates.",
                "name": "getX",
                "variants": [{
                    "returns": [{
                        "description": "The x position in world coordinates.",
                        "name": "x",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the y position of the body in world coordinates.",
                "name": "getY",
                "variants": [{
                    "returns": [{
                        "description": "The y position in world coordinates.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns whether the body is actively used in the simulation.",
                "name": "isActive",
                "variants": [{
                    "returns": [{
                        "description": "True if the body is active or false if not.",
                        "name": "status",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Returns the sleep status of the body.",
                "name": "isAwake",
                "variants": [{
                    "returns": [{
                        "description": "True if the body is awake or false if not.",
                        "name": "status",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Get the bullet status of a body.\n\nThere are two methods to check for body collisions:\n\nat their location when the world is updated (default)\n\nusing continuous collision detection (CCD)\n\nThe default method is efficient, but a body moving very quickly may sometimes jump over another body without producing a collision. A body that is set as a bullet will use CCD. This is less efficient, but is guaranteed not to jump when moving quickly.\n\nNote that static bodies (with zero mass) always use CCD, so your walls will not let a fast moving body pass through even if it is not a bullet.",
                "name": "isBullet",
                "variants": [{
                    "returns": [{
                        "description": "The bullet status of the body.",
                        "name": "status",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Gets whether the Body is destroyed. Destroyed bodies cannot be used.",
                "name": "isDestroyed",
                "variants": [{
                    "returns": [{
                        "description": "Whether the Body is destroyed.",
                        "name": "destroyed",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Returns whether the body rotation is locked.",
                "name": "isFixedRotation",
                "variants": [{
                    "returns": [{
                        "description": "True if the body's rotation is locked or false if not.",
                        "name": "fixed",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Returns the sleeping behaviour of the body.",
                "name": "isSleepingAllowed",
                "variants": [{
                    "returns": [{
                        "description": "True if the body is allowed to sleep or false if not.",
                        "name": "status",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Resets the mass of the body by recalculating it from the mass properties of the fixtures.",
                "name": "resetMassData",
                "variants": [[]]
            }, {
                "description": "Sets whether the body is active in the world.\n\nAn inactive body does not take part in the simulation. It will not move or cause any collisions.",
                "name": "setActive",
                "variants": [{
                    "arguments": [{
                        "description": "If the body is active or not.",
                        "name": "active",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Set the angle of the body.\n\nThe angle is measured in radians. If you need to transform it from degrees, use math.rad.\n\nA value of 0 radians will mean \"looking to the right\". .Although radians increase counter-clockwise, the y-axis points down so it becomes clockwise from our point of view.\n\nIt is possible to cause a collision with another body by changing its angle.",
                "name": "setAngle",
                "variants": [{
                    "arguments": [{
                        "description": "The angle in radians.",
                        "name": "angle",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the angular damping of a Body.\n\nSee Body:getAngularDamping for a definition of angular damping.\n\nAngular damping can take any value from 0 to infinity. It is recommended to stay between 0 and 0.1, though. Other values will look unrealistic.",
                "name": "setAngularDamping",
                "variants": [{
                    "arguments": [{
                        "description": "The new angular damping.",
                        "name": "damping",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the angular velocity of a Body.\n\nThe angular velocity is the rate of change of angle over time.\n\nThis function will not accumulate anything; any impulses previously applied since the last call to World:update will be lost.",
                "name": "setAngularVelocity",
                "variants": [{
                    "arguments": [{
                        "description": "The new angular velocity, in radians per second",
                        "name": "w",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Wakes the body up or puts it to sleep.",
                "name": "setAwake",
                "variants": [{
                    "arguments": [{
                        "description": "The body sleep status.",
                        "name": "awake",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Set the bullet status of a body.\n\nThere are two methods to check for body collisions:\n\nat their location when the world is updated (default)\n\nusing continuous collision detection (CCD)\n\nThe default method is efficient, but a body moving very quickly may sometimes jump over another body without producing a collision. A body that is set as a bullet will use CCD. This is less efficient, but is guaranteed not to jump when moving quickly.\n\nNote that static bodies (with zero mass) always use CCD, so your walls will not let a fast moving body pass through even if it is not a bullet.",
                "name": "setBullet",
                "variants": [{
                    "arguments": [{
                        "description": "The bullet status of the body.",
                        "name": "status",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Set whether a body has fixed rotation.\n\nBodies with fixed rotation don't vary the speed at which they rotate.",
                "name": "setFixedRotation",
                "variants": [{
                    "arguments": [{
                        "description": "Whether the body should have fixed rotation.",
                        "name": "fixed",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Sets a new gravity scale factor for the body.",
                "name": "setGravityScale",
                "variants": [{
                    "arguments": [{
                        "description": "The new gravity scale factor.",
                        "name": "scale",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Set the inertia of a body.\n\nThis value can also be set by the fourth argument of Body:setMass.",
                "name": "setInertia",
                "variants": [{
                    "arguments": [{
                        "description": "The new moment of inertia, in kilograms per meter squared.",
                        "name": "inertia",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the linear damping of a Body\n\nSee Body:getLinearDamping for a definition of linear damping.\n\nLinear damping can take any value from 0 to infinity. It is recommended to stay between 0 and 0.1, though. Other values will make the objects look \"floaty\".",
                "name": "setLinearDamping",
                "variants": [{
                    "arguments": [{
                        "description": "The new linear damping.",
                        "name": "ld",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets a new linear velocity for the Body.\n\nThis function will not accumulate anything; any impulses previously applied since the last call to World:update will be lost.",
                "name": "setLinearVelocity",
                "variants": [{
                    "arguments": [{
                        "description": "The x component of the velocity vector.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y component of the velocity vector.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the mass in kilograms.",
                "name": "setMass",
                "variants": [{
                    "arguments": [{
                        "description": "The mass, in kilograms.",
                        "name": "mass",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Overrides the calculated mass data.",
                "name": "setMassData",
                "variants": [{
                    "arguments": [{
                        "description": "The x component of the center of mass in local coordinates.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y component of the center of mass in local coordinates.",
                        "name": "y",
                        "type": "number"
                    }, {
                        "description": "The mass, in kilograms.",
                        "name": "mass",
                        "type": "number"
                    }, {
                        "description": "The rotational inertia, in kilograms per squared meter.",
                        "name": "inertia",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Set the position of the body.\n\nNote that this may not be the center of mass of the body.",
                "name": "setPosition",
                "variants": [{
                    "arguments": [{
                        "description": "The x position.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y position.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the sleeping behaviour of the body.",
                "name": "setSleepingAllowed",
                "variants": [{
                    "arguments": [{
                        "description": "True if the body is allowed to sleep or false if not.",
                        "name": "allowed",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Sets a new body type.",
                "name": "setType",
                "variants": [{
                    "arguments": [{
                        "description": "The new type.",
                        "name": "type",
                        "type": "BodyType"
                    }]
                }]
            }, {
                "description": "Associates a Lua value with the Body.\n\nTo delete the reference, explicitly pass nil.\n\nUse this function in one thread only.",
                "name": "setUserData",
                "variants": [{
                    "arguments": [{
                        "description": "The Lua value to associate with the Body.",
                        "name": "value",
                        "type": "value"
                    }]
                }]
            }, {
                "description": "Set the x position of the body.",
                "name": "setX",
                "variants": [{
                    "arguments": [{
                        "description": "The x position.",
                        "name": "x",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Set the y position of the body.",
                "name": "setY",
                "variants": [{
                    "arguments": [{
                        "description": "The y position.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }],
            "name": "Body",
            "supertypes": ["Object"]
        }, {
            "constructors": ["newChainShape"],
            "description": "A ChainShape consists of multiple line segments. It can be used to create the boundaries of your terrain. The shape does not have volume and can only collide with PolygonShape and CircleShape.\n\nUnlike the PolygonShape, the ChainShape does not have a vertices limit or has to form a convex shape, but self intersections are not supported.",
            "functions": [{
                "description": "Returns a child of the shape as an EdgeShape.",
                "name": "getChildEdge",
                "variants": [{
                    "arguments": [{
                        "description": "The index of the child.",
                        "name": "index",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The child as an EdgeShape.",
                        "name": "EdgeShape",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the vertex that establishes a connection to the next shape.\n\nSetting next and previous ChainShape vertices can help prevent unwanted collisions when a flat shape slides along the edge and moves over to the new shape.",
                "name": "getNextVertex",
                "variants": [{
                    "arguments": [{
                        "default": "nil",
                        "description": "The x-component of the vertex, or nil if ChainShape:setNextVertex hasn't been called.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "default": "nil",
                        "description": "The y-component of the vertex, or nil if ChainShape:setNextVertex hasn't been called.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns a point of the shape.",
                "name": "getPoint",
                "variants": [{
                    "arguments": [{
                        "description": "The index of the point to return.",
                        "name": "index",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The x-coordinate of the point.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y-coordinate of the point.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns all points of the shape.",
                "name": "getPoints",
                "variants": [{
                    "returns": [{
                        "description": "The x-coordinate of the first point.",
                        "name": "x1",
                        "type": "number"
                    }, {
                        "description": "The y-coordinate of the first point.",
                        "name": "y1",
                        "type": "number"
                    }, {
                        "description": "The x-coordinate of the second point.",
                        "name": "x2",
                        "type": "number"
                    }, {
                        "description": "The y-coordinate of the second point.",
                        "name": "y2",
                        "type": "number"
                    }, {
                        "description": "Additional x and y values.",
                        "name": "...",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the vertex that establishes a connection to the previous shape.\n\nSetting next and previous ChainShape vertices can help prevent unwanted collisions when a flat shape slides along the edge and moves over to the new shape.",
                "name": "getPreviousVertex",
                "variants": [{
                    "returns": [{
                        "default": "nil",
                        "description": "The x-component of the vertex, or nil if ChainShape:setNextVertex hasn't been called.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "default": "nil",
                        "description": "The y-component of the vertex, or nil if ChainShape:setNextVertex hasn't been called.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the number of vertices the shape has.",
                "name": "getVertexCount",
                "variants": [{
                    "returns": [{
                        "description": "The number of vertices.",
                        "name": "count",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets a vertex that establishes a connection to the next shape.\n\nThis can help prevent unwanted collisions when a flat shape slides along the edge and moves over to the new shape.",
                "name": "setNextVertex",
                "variants": [{
                    "arguments": [{
                        "description": "The x component of the vertex.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y component of the vertex.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets a vertex that establishes a connection to the previous shape.\n\nThis can help prevent unwanted collisions when a flat shape slides along the edge and moves over to the new shape.",
                "name": "setPreviousVertex",
                "variants": [{
                    "arguments": [{
                        "description": "The x component of the vertex.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y component of the vertex.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }],
            "name": "ChainShape",
            "supertypes": ["Shape", "Object"]
        }, {
            "constructors": ["newCircleShape"],
            "description": "Circle extends Shape and adds a radius and a local position.",
            "functions": [{
                "description": "Gets the center point of the circle shape.",
                "name": "getPoint",
                "variants": [{
                    "returns": [{
                        "description": "The x-component of the center point of the circle.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y-component of the center point of the circle.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the radius of the circle shape.",
                "name": "getRadius",
                "variants": [{
                    "returns": [{
                        "description": "The radius of the circle.",
                        "name": "radius",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the location of the center of the circle shape.",
                "name": "setPoint",
                "variants": [{
                    "arguments": [{
                        "description": "The x-component of the new center point of the circle.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y-component of the new center point of the circle.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the radius of the circle.",
                "name": "setRadius",
                "variants": [{
                    "arguments": [{
                        "description": "The radius of the circle.",
                        "name": "radius",
                        "type": "number"
                    }]
                }]
            }],
            "name": "CircleShape",
            "supertypes": ["Shape", "Object"]
        }, {
            "description": "Contacts are objects created to manage collisions in worlds.",
            "functions": [{
                "description": "Gets the two Fixtures that hold the shapes that are in contact.",
                "name": "getFixtures",
                "variants": [{
                    "returns": [{
                        "description": "The first Fixture.",
                        "name": "fixtureA",
                        "type": "Fixture"
                    }, {
                        "description": "The second Fixture.",
                        "name": "fixtureB",
                        "type": "Fixture"
                    }]
                }]
            }, {
                "description": "Get the friction between two shapes that are in contact.",
                "name": "getFriction",
                "variants": [{
                    "returns": [{
                        "description": "The friction of the contact.",
                        "name": "friction",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the normal vector between two shapes that are in contact.\n\nThis function returns the coordinates of a unit vector that points from the first shape to the second.",
                "name": "getNormal",
                "variants": [{
                    "returns": [{
                        "description": "The x component of the normal vector.",
                        "name": "nx",
                        "type": "number"
                    }, {
                        "description": "The y component of the normal vector.",
                        "name": "ny",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the contact points of the two colliding fixtures. There can be one or two points.",
                "name": "getPositions",
                "variants": [{
                    "returns": [{
                        "description": "The x coordinate of the first contact point. ",
                        "name": "x1",
                        "type": "number"
                    }, {
                        "description": "The y coordinate of the first contact point.",
                        "name": "y1",
                        "type": "number"
                    }, {
                        "description": "The x coordinate of the second contact point.",
                        "name": "x2",
                        "type": "number"
                    }, {
                        "description": "The y coordinate of the second contact point.",
                        "name": "y2",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the restitution between two shapes that are in contact.",
                "name": "getRestitution",
                "variants": [{
                    "returns": [{
                        "description": "The restitution between the two shapes.",
                        "name": "restitution",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns whether the contact is enabled. The collision will be ignored if a contact gets disabled in the post solve callback.",
                "name": "isEnabled",
                "variants": [{
                    "returns": [{
                        "description": "True if enabled, false otherwise.",
                        "name": "enabled",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Returns whether the two colliding fixtures are touching each other.",
                "name": "isTouching",
                "variants": [{
                    "returns": [{
                        "description": "True if they touch or false if not.",
                        "name": "touching",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Resets the contact friction to the mixture value of both fixtures.",
                "name": "resetFriction",
                "variants": [[]]
            }, {
                "description": "Resets the contact restitution to the mixture value of both fixtures.",
                "name": "resetRestitution",
                "variants": [[]]
            }, {
                "description": "Enables or disables the contact.",
                "name": "setEnabled",
                "variants": [{
                    "arguments": [{
                        "description": "True to enable or false to disable.",
                        "name": "enabled",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Sets the contact friction.",
                "name": "setFriction",
                "variants": [{
                    "arguments": [{
                        "description": "The contact friction.",
                        "name": "friction",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the contact restitution.",
                "name": "setRestitution",
                "variants": [{
                    "arguments": [{
                        "description": "The contact restitution.",
                        "name": "restitution",
                        "type": "number"
                    }]
                }]
            }],
            "name": "Contact",
            "supertypes": ["Object"]
        }, {
            "constructors": ["newEdgeShape"],
            "description": "A EdgeShape is a line segment. They can be used to create the boundaries of your terrain. The shape does not have volume and can only collide with PolygonShape and CircleShape.",
            "functions": [{
                "description": "Returns the local coordinates of the edge points.",
                "name": "getPoints",
                "variants": [{
                    "returns": [{
                        "description": "The x component of the first vertex.",
                        "name": "x1",
                        "type": "number"
                    }, {
                        "description": "The y component of the first vertex.",
                        "name": "y1",
                        "type": "number"
                    }, {
                        "description": "The x component of the second vertex.",
                        "name": "x2",
                        "type": "number"
                    }, {
                        "description": "The y component of the second vertex.",
                        "name": "y2",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the vertex that establishes a connection to the next shape.\n\nSetting next and previous EdgeShape vertices can help prevent unwanted collisions when a flat shape slides along the edge and moves over to the new shape.",
                "name": "getNextVertex",
                "variants": [{
                    "returns": [{
                        "description": "The x-component of the vertex, or nil if EdgeShape:setNextVertex hasn't been called.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y-component of the vertex, or nil if EdgeShape:setNextVertex hasn't been called.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the vertex that establishes a connection to the previous shape.\n\nSetting next and previous EdgeShape vertices can help prevent unwanted collisions when a flat shape slides along the edge and moves over to the new shape.",
                "name": "getPreviousVertex",
                "variants": [{
                    "returns": [{
                        "description": "The x-component of the vertex, or nil if EdgeShape:setPreviousVertex hasn't been called.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y-component of the vertex, or nil if EdgeShape:setPreviousVertex hasn't been called.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets a vertex that establishes a connection to the next shape.\n\nThis can help prevent unwanted collisions when a flat shape slides along the edge and moves over to the new shape.",
                "name": "setNextVertex",
                "variants": [{
                    "arguments": [{
                        "description": "The x-component of the vertex.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y-component of the vertex.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets a vertex that establishes a connection to the previous shape.\n\nThis can help prevent unwanted collisions when a flat shape slides along the edge and moves over to the new shape.",
                "name": "setPreviousVertex",
                "variants": [{
                    "arguments": [{
                        "description": "The x-component of the vertex.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y-component of the vertex.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }],
            "name": "EdgeShape",
            "supertypes": ["Shape", "Object"]
        }, {
            "constructors": ["newDistanceJoint"],
            "description": "Keeps two bodies at the same distance.",
            "functions": [{
                "description": "Gets the damping ratio.",
                "name": "getDampingRatio",
                "variants": [{
                    "returns": [{
                        "description": "The damping ratio.",
                        "name": "ratio",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the response speed.",
                "name": "getFrequency",
                "variants": [{
                    "returns": [{
                        "description": "The response speed.",
                        "name": "Hz",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the equilibrium distance between the two Bodies.",
                "name": "getLength",
                "variants": [{
                    "returns": [{
                        "description": "The length between the two Bodies.",
                        "name": "l",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the damping ratio.",
                "name": "setDampingRatio",
                "variants": [{
                    "arguments": [{
                        "description": "The damping ratio.",
                        "name": "ratio",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the response speed.",
                "name": "setFrequency",
                "variants": [{
                    "arguments": [{
                        "description": "The response speed.",
                        "name": "Hz",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the equilibrium distance between the two Bodies.",
                "name": "setLength",
                "variants": [{
                    "arguments": [{
                        "description": "The length between the two Bodies.",
                        "name": "l",
                        "type": "number"
                    }]
                }]
            }],
            "name": "DistanceJoint",
            "supertypes": ["Object", "Joint"]
        }, {
            "constructors": ["newFixture"],
            "description": "Fixtures attach shapes to bodies.",
            "functions": [{
                "description": "Destroys the fixture",
                "name": "destroy",
                "variants": [[]]
            }, {
                "description": "Returns the body to which the fixture is attached.",
                "name": "getBody",
                "variants": [{
                    "returns": [{
                        "description": "The parent body.",
                        "name": "body",
                        "type": "Body"
                    }]
                }]
            }, {
                "description": "Returns the points of the fixture bounding box. In case the fixture has multiple children a 1-based index can be specified. For example, a fixture will have multiple children with a chain shape.",
                "name": "getBoundingBox",
                "variants": [{
                    "arguments": [{
                        "default": "1",
                        "description": "A bounding box of the fixture.",
                        "name": "index",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The x position of the top-left point.",
                        "name": "topLeftX",
                        "type": "number"
                    }, {
                        "description": "The y position of the top-left point.",
                        "name": "topLeftY",
                        "type": "number"
                    }, {
                        "description": "The x position of the bottom-right point.",
                        "name": "bottomRightX",
                        "type": "number"
                    }, {
                        "description": "The y position of the bottom-right point.",
                        "name": "bottomRightY",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the categories the fixture belongs to.",
                "name": "getCategory",
                "variants": [{
                    "returns": [{
                        "description": "The first category.",
                        "name": "category1",
                        "type": "number"
                    }, {
                        "description": "The second category.",
                        "name": "category2",
                        "type": "number"
                    }, {
                        "description": "Additional categories.",
                        "name": "...",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the density of the fixture.",
                "name": "getDensity",
                "variants": [{
                    "returns": [{
                        "description": "The fixture density in kilograms per square meter.",
                        "name": "density",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the filter data of the fixture. Categories and masks are encoded as the bits of a 16-bit integer.",
                "name": "getFilterData",
                "variants": [{
                    "returns": [{
                        "description": "The categories as an integer from 0 to 65535.",
                        "name": "categories",
                        "type": "number"
                    }, {
                        "description": "The mask as an integer from 0 to 65535.",
                        "name": "mask",
                        "type": "number"
                    }, {
                        "description": "The group as an integer from -32768 to 32767.",
                        "name": "group",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the friction of the fixture.",
                "name": "getFriction",
                "variants": [{
                    "returns": [{
                        "description": "The fixture friction.",
                        "name": "friction",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the group the fixture belongs to. Fixtures with the same group will always collide if the group is positive or never collide if it's negative. The group zero means no group.\n\nThe groups range from -32768 to 32767.",
                "name": "getGroupIndex",
                "variants": [{
                    "returns": [{
                        "description": "The group of the fixture.",
                        "name": "group",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the category mask of the fixture.",
                "name": "getMask",
                "variants": [{
                    "returns": [{
                        "description": "The first category selected by the mask.",
                        "name": "mask1",
                        "type": "number"
                    }, {
                        "description": "The second category selected by the mask.",
                        "name": "mask2",
                        "type": "number"
                    }, {
                        "description": "Additional categories selected by the mask.",
                        "name": "...",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the mass, its center and the rotational inertia.",
                "name": "getMassData",
                "variants": [{
                    "returns": [{
                        "description": "The x position of the center of mass.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y position of the center of mass.",
                        "name": "y",
                        "type": "number"
                    }, {
                        "description": "The mass of the fixture.",
                        "name": "mass",
                        "type": "number"
                    }, {
                        "description": "The rotational inertia.",
                        "name": "inertia",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the restitution of the fixture.",
                "name": "getRestitution",
                "variants": [{
                    "returns": [{
                        "description": "The fixture restitution.",
                        "name": "restitution",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the shape of the fixture. This shape is a reference to the actual data used in the simulation. It's possible to change its values between timesteps.\n\nDo not call any functions on this shape after the parent fixture has been destroyed. This shape will point to an invalid memory address and likely cause crashes if you interact further with it.",
                "name": "getShape",
                "variants": [{
                    "returns": [{
                        "description": "The fixture's shape.",
                        "name": "shape",
                        "type": "Shape"
                    }]
                }]
            }, {
                "description": "Returns the Lua value associated with this fixture.\n\nUse this function in one thread only.",
                "name": "getUserData",
                "variants": [{
                    "returns": [{
                        "description": "The Lua value associated with the fixture.",
                        "name": "value",
                        "type": "mixed"
                    }]
                }]
            }, {
                "description": "Gets whether the Fixture is destroyed. Destroyed fixtures cannot be used.",
                "name": "isDestroyed",
                "variants": [{
                    "returns": [{
                        "description": "Whether the Fixture is destroyed.",
                        "name": "destroyed",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Returns whether the fixture is a sensor.",
                "name": "isSensor",
                "variants": [{
                    "returns": [{
                        "description": "If the fixture is a sensor.",
                        "name": "sensor",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Casts a ray against the shape of the fixture and returns the surface normal vector and the line position where the ray hit. If the ray missed the shape, nil will be returned.\n\nThe ray starts on the first point of the input line and goes towards the second point of the line. The fourth argument is the maximum distance the ray is going to travel as a scale factor of the input line length.\n\nThe childIndex parameter is used to specify which child of a parent shape, such as a ChainShape, will be ray casted. For ChainShapes, the index of 1 is the first edge on the chain. Ray casting a parent shape will only test the child specified so if you want to test every shape of the parent, you must loop through all of its children.\n\nThe world position of the impact can be calculated by multiplying the line vector with the third return value and adding it to the line starting point.\n\nhitx, hity = x1 + (x2 - x1) * fraction, y1 + (y2 - y1) * fraction",
                "name": "rayCast",
                "variants": [{
                    "arguments": [{
                        "description": "The x position of the ray starting point.",
                        "name": "x1",
                        "type": "number"
                    }, {
                        "description": "The y position of the ray starting point.",
                        "name": "y1",
                        "type": "number"
                    }, {
                        "description": "The x position of the ray end point.",
                        "name": "x2",
                        "type": "number"
                    }, {
                        "description": "The y position of the ray end point.",
                        "name": "y1",
                        "type": "number"
                    }, {
                        "description": "The maximum distance the ray is going to travel as a number from 0 to 1.",
                        "name": "maxFraction",
                        "type": "number"
                    }, {
                        "default": "1",
                        "description": "The index of the child the ray gets cast against.",
                        "name": "childIndex",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The x position where the ray intersects with the shape.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y position where the ray intersects with the shape.",
                        "name": "y",
                        "type": "number"
                    }, {
                        "description": "The position on the input vector where the intersection happened as a number from 0 to 1.",
                        "name": "fraction",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the categories the fixture belongs to. There can be up to 16 categories represented as a number from 1 to 16.",
                "name": "setCategory",
                "variants": [{
                    "arguments": [{
                        "description": "The first category.",
                        "name": "category1",
                        "type": "number"
                    }, {
                        "description": "The second category.",
                        "name": "category2",
                        "type": "number"
                    }, {
                        "description": "Additional categories.",
                        "name": "...",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the density of the fixture. Call Body:resetMassData if this needs to take effect immediately.",
                "name": "setDensity",
                "variants": [{
                    "arguments": [{
                        "description": "The fixture density in kilograms per square meter.",
                        "name": "density",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the filter data of the fixture.\n\nGroups, categories, and mask can be used to define the collision behaviour of the fixture.\n\nIf two fixtures are in the same group they either always collide if the group is positive, or never collide if it's negative. If the group is zero or they do not match, then the contact filter checks if the fixtures select a category of the other fixture with their masks. The fixtures do not collide if that's not the case. If they do have each other's categories selected, the return value of the custom contact filter will be used. They always collide if none was set.\n\nThere can be up to 16 categories. Categories and masks are encoded as the bits of a 16-bit integer.",
                "name": "setFilterData",
                "variants": [{
                    "arguments": [{
                        "description": "The categories as an integer from 0 to 65535.",
                        "name": "categories",
                        "type": "number"
                    }, {
                        "description": "The mask as an integer from 0 to 65535.",
                        "name": "mask",
                        "type": "number"
                    }, {
                        "description": "The group as an integer from -32768 to 32767.",
                        "name": "group",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the friction of the fixture.",
                "name": "setFriction",
                "variants": [{
                    "arguments": [{
                        "description": "The fixture friction.",
                        "name": "friction",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the group the fixture belongs to. Fixtures with the same group will always collide if the group is positive or never collide if it's negative. The group zero means no group.\n\nThe groups range from -32768 to 32767.",
                "name": "setGroupIndex",
                "variants": [{
                    "arguments": [{
                        "description": "The group as an integer from -32768 to 32767.",
                        "name": "group",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the category mask of the fixture. There can be up to 16 categories represented as a number from 1 to 16.\n\nThis fixture will collide with the fixtures that are in the selected categories if the other fixture also has a category of this fixture selected.",
                "name": "setMask",
                "variants": [{
                    "arguments": [{
                        "description": "The first category.",
                        "name": "mask1",
                        "type": "number"
                    }, {
                        "description": "The second category.",
                        "name": "mask2",
                        "type": "number"
                    }, {
                        "description": "Additional categories.",
                        "name": "...",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the restitution of the fixture.",
                "name": "setRestitution",
                "variants": [{
                    "arguments": [{
                        "description": "The fixture restitution.",
                        "name": "restitution",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets whether the fixture should act as a sensor.\n\nSensor do not produce collisions responses, but the begin and end callbacks will still be called for this fixture.",
                "name": "setSensor",
                "variants": [{
                    "arguments": [{
                        "description": "The sensor status.",
                        "name": "sensor",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Associates a Lua value with the fixture.\n\nUse this function in one thread only.",
                "name": "setUserData",
                "variants": [{
                    "arguments": [{
                        "description": "The Lua value associated with the fixture.",
                        "name": "value",
                        "type": "mixed"
                    }]
                }]
            }, {
                "description": "Checks if a point is inside the shape of the fixture.",
                "name": "testPoint",
                "variants": [{
                    "arguments": [{
                        "description": "The x position of the point.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y position of the point.",
                        "name": "y",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "True if the point is inside or false if it is outside.",
                        "name": "isInside",
                        "type": "boolean"
                    }]
                }]
            }],
            "name": "Fixture",
            "supertypes": ["Object"]
        }, {
            "constructors": ["newFrictionJoint"],
            "description": "A FrictionJoint applies friction to a body.",
            "functions": [{
                "description": "Gets the maximum friction force in Newtons.",
                "name": "getMaxForce",
                "variants": [{
                    "returns": [{
                        "description": "Maximum force in Newtons.",
                        "name": "force",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the maximum friction torque in Newton-meters.",
                "name": "getMaxTorque",
                "variants": [{
                    "returns": [{
                        "description": "Maximum torque in Newton-meters.",
                        "name": "torque",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the maximum friction force in Newtons.",
                "name": "setMaxForce",
                "variants": [{
                    "arguments": [{
                        "description": "Max force in Newtons.",
                        "name": "maxForce",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the maximum friction torque in Newton-meters.",
                "name": "setMaxTorque",
                "variants": [{
                    "arguments": [{
                        "description": "Maximum torque in Newton-meters.",
                        "name": "torque",
                        "type": "number"
                    }]
                }]
            }],
            "name": "FrictionJoint",
            "supertypes": ["Object", "Joint"]
        }, {
            "constructors": ["newGearJoint"],
            "description": "Keeps bodies together in such a way that they act like gears.",
            "functions": [{
                "description": "Get the Joints connected by this GearJoint.",
                "name": "getJoints",
                "variants": [{
                    "returns": [{
                        "description": "The first connected Joint.",
                        "name": "joint1",
                        "type": "Joint"
                    }, {
                        "description": "The second connected Joint.",
                        "name": "joint2",
                        "type": "Joint"
                    }]
                }]
            }, {
                "description": "Get the ratio of a gear joint.",
                "name": "getRatio",
                "variants": [{
                    "returns": [{
                        "description": "The ratio of the joint.",
                        "name": "ratio",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Set the ratio of a gear joint.",
                "name": "setRatio",
                "variants": [{
                    "arguments": [{
                        "description": "The new ratio of the joint.",
                        "name": "ratio",
                        "type": "number"
                    }]
                }]
            }],
            "name": "GearJoint",
            "supertypes": ["Object", "Joint"]
        }, {
            "description": "Attach multiple bodies together to interact in unique ways.",
            "functions": [{
                "description": "Explicitly destroys the Joint. When you don't have time to wait for garbage collection, this function may be used to free the object immediately, but note that an error will occur if you attempt to use the object after calling this function.",
                "name": "destroy",
                "variants": [[]]
            }, {
                "description": "Get the anchor points of the joint.",
                "name": "getAnchors",
                "variants": [{
                    "returns": [{
                        "description": "The x component of the anchor on Body 1.",
                        "name": "x1",
                        "type": "number"
                    }, {
                        "description": "The y component of the anchor on Body 1.",
                        "name": "y1",
                        "type": "number"
                    }, {
                        "description": "The x component of the anchor on Body 2.",
                        "name": "x2",
                        "type": "number"
                    }, {
                        "description": "The y component of the anchor on Body 2.",
                        "name": "y2",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the bodies that the Joint is attached to.",
                "name": "getBodies",
                "variants": [{
                    "returns": [{
                        "description": "The first Body.",
                        "name": "bodyA",
                        "type": "Body"
                    }, {
                        "description": "The second Body.",
                        "name": "bodyB",
                        "type": "Body"
                    }]
                }]
            }, {
                "description": "Gets whether the connected Bodies collide.",
                "name": "getCollideConnected",
                "variants": [{
                    "returns": [{
                        "description": "True if they collide, false otherwise.",
                        "name": "c",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Gets the reaction force on Body 2 at the joint anchor.",
                "name": "getReactionForce",
                "variants": [{
                    "returns": [{
                        "description": "The x component of the force.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y component of the force.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the reaction torque on the second body.",
                "name": "getReactionTorque",
                "variants": [{
                    "arguments": [{
                        "description": "How long the force applies. Usually the inverse time step or 1/dt.",
                        "name": "invdt",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The reaction torque on the second body.",
                        "name": "torque",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets a string representing the type.",
                "name": "getType",
                "variants": [{
                    "returns": [{
                        "description": "A string with the name of the Joint type.",
                        "name": "type",
                        "type": "JointType"
                    }]
                }]
            }, {
                "description": "Returns the Lua value associated with this Joint.",
                "name": "getUserData",
                "variants": [{
                    "returns": [{
                        "description": "The Lua value associated with the Joint.",
                        "name": "value",
                        "type": "mixed"
                    }]
                }]
            }, {
                "description": "Gets whether the Joint is destroyed. Destroyed joints cannot be used.",
                "name": "isDestroyed",
                "variants": [{
                    "returns": [{
                        "description": "Whether the Joint is destroyed.",
                        "name": "destroyed",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Associates a Lua value with the Joint.\n\nTo delete the reference, explicitly pass nil.",
                "name": "setUserData",
                "variants": [{
                    "arguments": [{
                        "description": "The Lua value to associate with the Joint.",
                        "name": "value",
                        "type": "mixed"
                    }]
                }]
            }],
            "name": "Joint",
            "subtypes": ["DistanceJoint", "FrictionJoint", "GearJoint", "MotorJoint", "MouseJoint", "PrismaticJoint", "PulleyJoint", "RevoluteJoint", "RopeJoint", "WeldJoint", "WheelJoint"],
            "supertypes": ["Object"]
        }, {
            "constructors": ["newMotorJoint"],
            "description": "Controls the relative motion between two Bodies. Position and rotation offsets can be specified, as well as the maximum motor force and torque that will be applied to reach the target offsets.",
            "functions": [{
                "description": "Gets the target angular offset between the two Bodies the Joint is attached to.",
                "name": "getAngularOffset",
                "variants": [{
                    "returns": [{
                        "description": "The target angular offset in radians: the second body's angle minus the first body's angle.",
                        "name": "angularoffset",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the target linear offset between the two Bodies the Joint is attached to.",
                "name": "getLinearOffset",
                "variants": [{
                    "returns": [{
                        "description": "The x component of the target linear offset, relative to the first Body.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y component of the target linear offset, relative to the first Body.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the target angluar offset between the two Bodies the Joint is attached to.",
                "name": "setAngularOffset",
                "variants": [{
                    "arguments": [{
                        "description": "The target angular offset in radians: the second body's angle minus the first body's angle.",
                        "name": "angularoffset",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the target linear offset between the two Bodies the Joint is attached to.",
                "name": "setLinearOffset",
                "variants": [{
                    "arguments": [{
                        "description": "The x component of the target linear offset, relative to the first Body.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y component of the target linear offset, relative to the first Body.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }],
            "name": "MotorJoint",
            "supertypes": ["Object", "Joint"]
        }, {
            "constructors": ["newMouseJoint"],
            "description": "For controlling objects with the mouse.",
            "functions": [{
                "description": "Returns the damping ratio.",
                "name": "getDampingRatio",
                "variants": [{
                    "returns": [{
                        "description": "The new damping ratio.",
                        "name": "ratio",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the frequency.",
                "name": "getFrequency",
                "variants": [{
                    "returns": [{
                        "description": "The frequency in hertz.",
                        "name": "freq",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the highest allowed force.",
                "name": "getMaxForce",
                "variants": [{
                    "returns": [{
                        "description": "The max allowed force.",
                        "name": "f",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the target point.",
                "name": "getTarget",
                "variants": [{
                    "returns": [{
                        "description": "The x component of the target.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The x component of the target.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets a new damping ratio.",
                "name": "setDampingRatio",
                "variants": [{
                    "arguments": [{
                        "description": "The new damping ratio.",
                        "name": "ratio",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets a new frequency.",
                "name": "setFrequency",
                "variants": [{
                    "arguments": [{
                        "description": "The new frequency in hertz.",
                        "name": "freq",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the highest allowed force.",
                "name": "setMaxForce",
                "variants": [{
                    "arguments": [{
                        "description": "The max allowed force.",
                        "name": "f",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the target point.",
                "name": "setTarget",
                "variants": [{
                    "arguments": [{
                        "description": "The x component of the target.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y component of the target.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }],
            "name": "MouseJoint",
            "supertypes": ["Object", "Joint"]
        }, {
            "constructors": ["newPolygonShape", "newRectangleShape"],
            "description": "Polygon is a convex polygon with up to 8 sides.",
            "functions": [{
                "description": "Get the local coordinates of the polygon's vertices.\n\nThis function has a variable number of return values. It can be used in a nested fashion with love.graphics.polygon.\n\nThis function may have up to 16 return values, since it returns two values for each vertex in the polygon. In other words, it can return the coordinates of up to 8 points.",
                "name": "getPoints",
                "variants": [{
                    "returns": [{
                        "description": "The x component of the first vertex.",
                        "name": "x1",
                        "type": "number"
                    }, {
                        "description": "The y component of the first vertex.",
                        "name": "y1",
                        "type": "number"
                    }, {
                        "description": "The x component of the second vertex.",
                        "name": "x2",
                        "type": "number"
                    }, {
                        "description": "The y component of the second vertex.",
                        "name": "y2",
                        "type": "number"
                    }, {
                        "description": "Additional x and y values.",
                        "name": "...",
                        "type": "number"
                    }]
                }]
            }],
            "name": "PolygonShape",
            "supertypes": ["Shape", "Object"]
        }, {
            "constructors": ["newPrismaticJoint"],
            "description": "Restricts relative motion between Bodies to one shared axis.",
            "functions": [{
                "description": "Gets the world-space axis vector of the Prismatic Joint.",
                "name": "getAxis",
                "variants": [{
                    "returns": [{
                        "description": "The x-axis coordinate of the world-space axis vector.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y-axis coordinate of the world-space axis vector.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the current joint angle speed.",
                "name": "getJointSpeed",
                "variants": [{
                    "returns": [{
                        "description": "Joint angle speed in meters/second.",
                        "name": "s",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the current joint translation.",
                "name": "getJointTranslation",
                "variants": [{
                    "returns": [{
                        "description": "Joint translation, usually in meters.",
                        "name": "t",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the joint limits.",
                "name": "getLimits",
                "variants": [{
                    "returns": [{
                        "description": "The lower limit, usually in meters.",
                        "name": "lower",
                        "type": "number"
                    }, {
                        "description": "The upper limit, usually in meters.",
                        "name": "upper",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the lower limit.",
                "name": "getLowerLimit",
                "variants": [{
                    "returns": [{
                        "description": "The lower limit, usually in meters.",
                        "name": "lower",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the maximum motor force.",
                "name": "getMaxMotorForce",
                "variants": [{
                    "returns": [{
                        "description": "The maximum motor force, usually in N.",
                        "name": "f",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the current motor force.",
                "name": "getMotorForce",
                "variants": [{
                    "returns": [{
                        "description": "The current motor force, usually in N.",
                        "name": "f",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the motor speed.",
                "name": "getMotorSpeed",
                "variants": [{
                    "returns": [{
                        "description": "The motor speed, usually in meters per second.",
                        "name": "s",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the upper limit.",
                "name": "getUpperLimit",
                "variants": [{
                    "returns": [{
                        "description": "The upper limit, usually in meters.",
                        "name": "upper",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Checks whether the limits are enabled.",
                "name": "hasLimitsEnabled",
                "variants": [{
                    "returns": [{
                        "description": "True if enabled, false otherwise.",
                        "name": "enabled",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Checks whether the motor is enabled.",
                "name": "isMotorEnabled",
                "variants": [{
                    "returns": [{
                        "description": "True if enabled, false if disabled.",
                        "name": "enabled",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Sets the limits.",
                "name": "setLimits",
                "variants": [{
                    "arguments": [{
                        "description": "The lower limit, usually in meters.",
                        "name": "lower",
                        "type": "number"
                    }, {
                        "description": "The upper limit, usually in meters.",
                        "name": "upper",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Enables or disables the limits of the joint.",
                "name": "setLimitsEnabled",
                "variants": [{
                    "arguments": [{
                        "description": "True to enable, false to disable.",
                        "name": "enable",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Sets the lower limit.",
                "name": "setLowerLimit",
                "variants": [{
                    "arguments": [{
                        "description": "The lower limit, usually in meters.",
                        "name": "lower",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Set the maximum motor force.",
                "name": "setMaxMotorForce",
                "variants": [{
                    "arguments": [{
                        "description": "The maximum motor force, usually in N.",
                        "name": "f",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Starts or stops the joint motor.",
                "name": "setMotorEnabled",
                "variants": [{
                    "arguments": [{
                        "description": "True to enable, false to disable.",
                        "name": "enable",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Sets the motor speed.",
                "name": "setMotorSpeed",
                "variants": [{
                    "arguments": [{
                        "description": "The motor speed, usually in meters per second.",
                        "name": "s",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the upper limit.",
                "name": "setUpperLimit",
                "variants": [{
                    "arguments": [{
                        "description": "The upper limit, usually in meters.",
                        "name": "upper",
                        "type": "number"
                    }]
                }]
            }],
            "name": "PrismaticJoint",
            "supertypes": ["Object", "Joint"]
        }, {
            "constructors": ["newPulleyJoint"],
            "description": "Allows you to simulate bodies connected through pulleys.",
            "functions": [{
                "description": "Get the total length of the rope.",
                "name": "getConstant",
                "variants": [{
                    "returns": [{
                        "description": "The length of the rope in the joint.",
                        "name": "length",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the ground anchor positions in world coordinates.",
                "name": "getGroundAnchors",
                "variants": [{
                    "returns": [{
                        "description": "The x coordinate of the first anchor.",
                        "name": "a1x",
                        "type": "number"
                    }, {
                        "description": "The y coordinate of the first anchor.",
                        "name": "a1y",
                        "type": "number"
                    }, {
                        "description": "The x coordinate of the second anchor.",
                        "name": "a2x",
                        "type": "number"
                    }, {
                        "description": "The y coordinate of the second anchor.",
                        "name": "a2y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the current length of the rope segment attached to the first body.",
                "name": "getLengthA",
                "variants": [{
                    "returns": [{
                        "description": "The length of the rope segment.",
                        "name": "length",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the current length of the rope segment attached to the second body.",
                "name": "getLengthB",
                "variants": [{
                    "returns": [{
                        "description": "The length of the rope segment.",
                        "name": "length",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the maximum lengths of the rope segments.",
                "name": "getMaxLengths",
                "variants": [{
                    "returns": [{
                        "description": "The maximum length of the first rope segment.",
                        "name": "len1",
                        "type": "number"
                    }, {
                        "description": "The maximum length of the second rope segment.",
                        "name": "len2",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the pulley ratio.",
                "name": "getRatio",
                "variants": [{
                    "returns": [{
                        "description": "The pulley ratio of the joint.",
                        "name": "ratio",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Set the total length of the rope.\n\nSetting a new length for the rope updates the maximum length values of the joint.",
                "name": "setConstant",
                "variants": [{
                    "arguments": [{
                        "description": "The new length of the rope in the joint.",
                        "name": "length",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Set the maximum lengths of the rope segments.\n\nThe physics module also imposes maximum values for the rope segments. If the parameters exceed these values, the maximum values are set instead of the requested values.",
                "name": "setMaxLengths",
                "variants": [{
                    "arguments": [{
                        "description": "The new maximum length of the first segment.",
                        "name": "max1",
                        "type": "number"
                    }, {
                        "description": "The new maximum length of the second segment.",
                        "name": "max2",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Set the pulley ratio.",
                "name": "setRatio",
                "variants": [{
                    "arguments": [{
                        "description": "The new pulley ratio of the joint.",
                        "name": "ratio",
                        "type": "number"
                    }]
                }]
            }],
            "name": "PulleyJoint",
            "supertypes": ["Object", "Joint"]
        }, {
            "constructors": ["newRevoluteJoint"],
            "description": "Allow two Bodies to revolve around a shared point.",
            "functions": [{
                "description": "Enables or disables the joint limits.",
                "name": "setLimitsEnabled",
                "variants": [{
                    "arguments": [{
                        "description": "True to enable, false to disable.",
                        "name": "enable",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Starts or stops the joint motor.",
                "name": "setMotorEnabled",
                "variants": [{
                    "arguments": [{
                        "description": "True to enable, false to disable.",
                        "name": "enable",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Get the current joint angle.",
                "name": "getJointAngle",
                "variants": [{
                    "returns": [{
                        "description": "The joint angle in radians.",
                        "name": "angle",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the current joint angle speed.",
                "name": "getJointSpeed",
                "variants": [{
                    "returns": [{
                        "description": "Joint angle speed in radians/second.",
                        "name": "s",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the joint limits.",
                "name": "getLimits",
                "variants": [{
                    "returns": [{
                        "description": "The lower limit, in radians.",
                        "name": "lower",
                        "type": "number"
                    }, {
                        "description": "The upper limit, in radians.",
                        "name": "upper",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the lower limit.",
                "name": "getLowerLimit",
                "variants": [{
                    "returns": [{
                        "description": "The lower limit, in radians.",
                        "name": "lower",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the maximum motor force.",
                "name": "getMaxMotorTorque",
                "variants": [{
                    "returns": [{
                        "description": "The maximum motor force, in Nm.",
                        "name": "f",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the motor speed.",
                "name": "getMotorSpeed",
                "variants": [{
                    "returns": [{
                        "description": "The motor speed, radians per second.",
                        "name": "s",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the current motor force.",
                "name": "getMotorTorque",
                "variants": [{
                    "returns": [{
                        "description": "The current motor force, in Nm.",
                        "name": "f",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the upper limit.",
                "name": "getUpperLimit",
                "variants": [{
                    "returns": [{
                        "description": "The upper limit, in radians.",
                        "name": "upper",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Checks whether limits are enabled.",
                "name": "hasLimitsEnabled",
                "variants": [{
                    "returns": [{
                        "description": "True if enabled, false otherwise.",
                        "name": "enabled",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Checks whether the motor is enabled.",
                "name": "isMotorEnabled",
                "variants": [{
                    "returns": [{
                        "description": "True if enabled, false if disabled.",
                        "name": "enabled",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Sets the limits.",
                "name": "setLimits",
                "variants": [{
                    "arguments": [{
                        "description": "The lower limit, in radians.",
                        "name": "lower",
                        "type": "number"
                    }, {
                        "description": "The upper limit, in radians.",
                        "name": "upper",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the lower limit.",
                "name": "setLowerLimit",
                "variants": [{
                    "arguments": [{
                        "description": "The lower limit, in radians.",
                        "name": "lower",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Set the maximum motor force.",
                "name": "setMaxMotorTorque",
                "variants": [{
                    "arguments": [{
                        "description": "The maximum motor force, in Nm.",
                        "name": "f",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the motor speed.",
                "name": "setMotorSpeed",
                "variants": [{
                    "arguments": [{
                        "description": "The motor speed, radians per second.",
                        "name": "s",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the upper limit.",
                "name": "setUpperLimit",
                "variants": [{
                    "arguments": [{
                        "description": "The upper limit, in radians.",
                        "name": "upper",
                        "type": "number"
                    }]
                }]
            }],
            "name": "RevoluteJoint",
            "supertypes": ["Object", "Joint"]
        }, {
            "constructors": ["newRopeJoint"],
            "description": "The RopeJoint enforces a maximum distance between two points on two bodies. It has no other effect.",
            "functions": [{
                "description": "Gets the maximum length of a RopeJoint.",
                "name": "getMaxLength",
                "variants": [{
                    "returns": [{
                        "description": "The maximum length of the RopeJoint.",
                        "name": "maxLength",
                        "type": "number"
                    }]
                }]
            }],
            "name": "RopeJoint",
            "supertypes": ["Object", "Joint"]
        }, {
            "constructors": ["newChainShape", "newEdgeShape", "newPolygonShape", "newRectangleShape"],
            "description": "Shapes are solid 2d geometrical objects used in love.physics.\n\nShapes are attached to a Body via a Fixture. The Shape object is copied when this happens. Shape position is relative to Body position.",
            "functions": [{
                "description": "Returns the points of the bounding box for the transformed shape.",
                "name": "computeAABB",
                "variants": [{
                    "arguments": [{
                        "description": "The translation of the shape on the x-axis.",
                        "name": "tx",
                        "type": "number"
                    }, {
                        "description": "The translation of the shape on the y-axis.",
                        "name": "ty",
                        "type": "number"
                    }, {
                        "description": "The shape rotation.",
                        "name": "tr",
                        "type": "number"
                    }, {
                        "default": "1",
                        "description": "The index of the child to compute the bounding box of.",
                        "name": "childIndex",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The x position of the top-left point.",
                        "name": "topLeftX",
                        "type": "number"
                    }, {
                        "description": "The y position of the top-left point.",
                        "name": "topLeftY",
                        "type": "number"
                    }, {
                        "description": "The x position of the bottom-right point.",
                        "name": "bottomRightX",
                        "type": "number"
                    }, {
                        "description": "The y position of the bottom-right point.",
                        "name": "bottomRightY",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Computes the mass properties for the shape with the specified density.",
                "name": "computeMass",
                "variants": [{
                    "arguments": [{
                        "description": "The shape density.",
                        "name": "density",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The x postition of the center of mass.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y postition of the center of mass.",
                        "name": "y",
                        "type": "number"
                    }, {
                        "description": "The mass of the shape.",
                        "name": "mass",
                        "type": "number"
                    }, {
                        "description": "The rotational inertia.",
                        "name": "inertia",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the number of children the shape has.",
                "name": "getChildCount",
                "variants": [{
                    "returns": [{
                        "description": "The number of children.",
                        "name": "count",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the radius of the shape.",
                "name": "getRadius",
                "variants": [{
                    "returns": [{
                        "description": "The radius of the shape.",
                        "name": "radius",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets a string representing the Shape. This function can be useful for conditional debug drawing.",
                "name": "getType",
                "variants": [{
                    "returns": [{
                        "description": "The type of the Shape.",
                        "name": "type",
                        "type": "ShapeType"
                    }]
                }]
            }, {
                "description": "Casts a ray against the shape and returns the surface normal vector and the line position where the ray hit. If the ray missed the shape, nil will be returned. The Shape can be transformed to get it into the desired position.\n\nThe ray starts on the first point of the input line and goes towards the second point of the line. The fourth argument is the maximum distance the ray is going to travel as a scale factor of the input line length.\n\nThe childIndex parameter is used to specify which child of a parent shape, such as a ChainShape, will be ray casted. For ChainShapes, the index of 1 is the first edge on the chain. Ray casting a parent shape will only test the child specified so if you want to test every shape of the parent, you must loop through all of its children.\n\nThe world position of the impact can be calculated by multiplying the line vector with the third return value and adding it to the line starting point.\n\nhitx, hity = x1 + (x2 - x1) * fraction, y1 + (y2 - y1) * fraction",
                "name": "rayCast",
                "variants": [{
                    "arguments": [{
                        "description": "The x position of the input line starting point.",
                        "name": "x1",
                        "type": "number"
                    }, {
                        "description": "The y position of the input line starting point.",
                        "name": "y1",
                        "type": "number"
                    }, {
                        "description": "The x position of the input line end point.",
                        "name": "x2",
                        "type": "number"
                    }, {
                        "description": "The y position of the input line end point.",
                        "name": "y2",
                        "type": "number"
                    }, {
                        "description": "Ray length parameter.",
                        "name": "maxFraction",
                        "type": "number"
                    }, {
                        "description": "The translation of the shape on the x-axis.",
                        "name": "tx",
                        "type": "number"
                    }, {
                        "description": "The translation of the shape on the y-axis.",
                        "name": "ty",
                        "type": "number"
                    }, {
                        "description": "The shape rotation.",
                        "name": "tr",
                        "type": "number"
                    }, {
                        "default": "1",
                        "description": "The index of the child the ray gets cast against.",
                        "name": "childIndex",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The x component of the normal vector of the edge where the ray hit the shape.",
                        "name": "xn",
                        "type": "number"
                    }, {
                        "description": "The y component of the normal vector of the edge where the ray hit the shape.",
                        "name": "yn",
                        "type": "number"
                    }, {
                        "description": "The position on the input line where the intersection happened as a factor of the line length.",
                        "name": "fraction",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Checks whether a point lies inside the shape. This is particularly useful for mouse interaction with the shapes. By looping through all shapes and testing the mouse position with this function, we can find which shapes the mouse touches.",
                "name": "testPoint",
                "variants": [{
                    "arguments": [{
                        "description": "The x component of the point.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y component of the point.",
                        "name": "y",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "True if inside, false if outside",
                        "name": "hit",
                        "type": "boolean"
                    }]
                }]
            }],
            "name": "Shape",
            "subtypes": ["ChainShape", "CircleShape", "EdgeShape", "PolygonShape"],
            "supertypes": ["Object"]
        }, {
            "constructors": ["newWeldJoint"],
            "description": "A WeldJoint essentially glues two bodies together.",
            "functions": [{
                "description": "Returns the damping ratio of the joint.",
                "name": "getDampingRatio",
                "variants": [{
                    "returns": [{
                        "description": "The damping ratio.",
                        "name": "ratio",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the frequency.",
                "name": "getFrequency",
                "variants": [{
                    "returns": [{
                        "description": "The frequency in hertz.",
                        "name": "freq",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "The new damping ratio.",
                "name": "setDampingRatio",
                "variants": [{
                    "arguments": [{
                        "description": "The new damping ratio.",
                        "name": "ratio",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets a new frequency.",
                "name": "setFrequency",
                "variants": [{
                    "arguments": [{
                        "description": "The new frequency in hertz.",
                        "name": "freq",
                        "type": "number"
                    }]
                }]
            }],
            "name": "WeldJoint",
            "supertypes": ["Object", "Joint"]
        }, {
            "constructors": ["newWheelJoint"],
            "description": "Restricts a point on the second body to a line on the first body.",
            "functions": [{
                "description": "Gets the world-space axis vector of the Wheel Joint.",
                "name": "getAxis",
                "variants": [{
                    "returns": [{
                        "description": "The x-axis coordinate of the world-space axis vector.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y-axis coordinate of the world-space axis vector.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the current joint translation speed.",
                "name": "getJointSpeed",
                "variants": [{
                    "returns": [{
                        "description": "The translation speed of the joint in meters per second.",
                        "name": "speed",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the current joint translation.",
                "name": "getJointTranslation",
                "variants": [{
                    "returns": [{
                        "description": "The translation of the joint in meters.",
                        "name": "position",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the joint limits.",
                "name": "getLimits",
                "variants": [{
                    "returns": [{
                        "description": "The lower limit, usually in meters.",
                        "name": "lower",
                        "type": "number"
                    }, {
                        "description": "The upper limit, usually in meters.",
                        "name": "upper",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the maximum motor torque.",
                "name": "getMaxMotorTorque",
                "variants": [{
                    "returns": [{
                        "description": "The maximum torque of the joint motor in newton meters.",
                        "name": "maxTorque",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the speed of the motor.",
                "name": "getMotorSpeed",
                "variants": [{
                    "returns": [{
                        "description": "The speed of the joint motor in radians per second.",
                        "name": "speed",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the current torque on the motor.",
                "name": "getMotorTorque",
                "variants": [{
                    "arguments": [{
                        "description": "How long the force applies. Usually the inverse time step or 1/dt.",
                        "name": "invdt",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The torque on the motor in newton meters.",
                        "name": "torque",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the damping ratio.",
                "name": "getSpringDampingRatio",
                "variants": [{
                    "returns": [{
                        "description": "The damping ratio.",
                        "name": "ratio",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the spring frequency.",
                "name": "getSpringFrequency",
                "variants": [{
                    "returns": [{
                        "description": "The frequency in hertz.",
                        "name": "freq",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets a new maximum motor torque.",
                "name": "setMaxMotorTorque",
                "variants": [{
                    "arguments": [{
                        "description": "The new maximum torque for the joint motor in newton meters.",
                        "name": "maxTorque",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Starts and stops the joint motor.",
                "name": "setMotorEnabled",
                "variants": [{
                    "arguments": [{
                        "description": "True turns the motor on and false turns it off.",
                        "name": "enable",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Sets a new speed for the motor.",
                "name": "setMotorSpeed",
                "variants": [{
                    "arguments": [{
                        "description": "The new speed for the joint motor in radians per second.",
                        "name": "speed",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets a new damping ratio.",
                "name": "setSpringDampingRatio",
                "variants": [{
                    "arguments": [{
                        "description": "The new damping ratio.",
                        "name": "ratio",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets a new spring frequency.",
                "name": "setSpringFrequency",
                "variants": [{
                    "arguments": [{
                        "description": "The new frequency in hertz.",
                        "name": "freq",
                        "type": "number"
                    }]
                }]
            }],
            "name": "WheelJoint",
            "supertypes": ["Object", "Joint"]
        }, {
            "constructors": ["newWorld"],
            "description": "A world is an object that contains all bodies and joints.",
            "functions": [{
                "description": "Destroys the world, taking all bodies, joints, fixtures and their shapes with it.\n\nAn error will occur if you attempt to use any of the destroyed objects after calling this function.",
                "name": "destroy",
                "variants": [[]]
            }, {
                "description": "Get the number of bodies in the world.",
                "name": "getBodyCount",
                "variants": [{
                    "returns": [{
                        "description": "The number of bodies in the world.",
                        "name": "n",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns a table with all bodies.",
                "name": "getBodyList",
                "variants": [{
                    "returns": [{
                        "description": "A sequence with all bodies.",
                        "name": "bodies",
                        "type": "table"
                    }]
                }]
            }, {
                "description": "Returns functions for the callbacks during the world update.",
                "name": "getCallbacks",
                "variants": [{
                    "returns": [{
                        "description": "Gets called when two fixtures begin to overlap.",
                        "name": "beginContact",
                        "type": "function"
                    }, {
                        "description": "Gets called when two fixtures cease to overlap.",
                        "name": "endContact",
                        "type": "function"
                    }, {
                        "description": "Gets called before a collision gets resolved.",
                        "name": "preSolve",
                        "type": "function"
                    }, {
                        "description": "Gets called after the collision has been resolved.",
                        "name": "postSolve",
                        "type": "function"
                    }]
                }]
            }, {
                "description": "Returns the number of contacts in the world.",
                "name": "getContactCount",
                "variants": [{
                    "returns": [{
                        "description": "The number of contacts in the world.",
                        "name": "n",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the function for collision filtering.",
                "name": "getContactFilter",
                "variants": [{
                    "returns": [{
                        "description": "The function that handles the contact filtering.",
                        "name": "contactFilter",
                        "type": "function"
                    }]
                }]
            }, {
                "description": "Returns a table with all contacts.",
                "name": "getContactList",
                "variants": [{
                    "returns": [{
                        "description": "A sequence with all contacts.",
                        "name": "contacts",
                        "type": "table"
                    }]
                }]
            }, {
                "description": "Get the gravity of the world.",
                "name": "getGravity",
                "variants": [{
                    "returns": [{
                        "description": "The x component of gravity.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y component of gravity.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Get the number of joints in the world.",
                "name": "getJointCount",
                "variants": [{
                    "returns": [{
                        "description": "The number of joints in the world.",
                        "name": "n",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns a table with all joints.",
                "name": "getJointList",
                "variants": [{
                    "returns": [{
                        "description": "A sequence with all joints.",
                        "name": "joints",
                        "type": "table"
                    }]
                }]
            }, {
                "description": "Gets whether the World is destroyed. Destroyed worlds cannot be used.",
                "name": "isDestroyed",
                "variants": [{
                    "returns": [{
                        "description": "Whether the World is destroyed.",
                        "name": "destroyed",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Returns if the world is updating its state.\n\nThis will return true inside the callbacks from World:setCallbacks.",
                "name": "isLocked",
                "variants": [{
                    "returns": [{
                        "description": "Will be true if the world is in the process of updating its state.",
                        "name": "locked",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Returns the sleep behaviour of the world.",
                "name": "isSleepingAllowed",
                "variants": [{
                    "returns": [{
                        "description": "True if the bodies are allowed to sleep or false if not.",
                        "name": "allowSleep",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Calls a function for each fixture inside the specified area.",
                "name": "queryBoundingBox",
                "variants": [{
                    "arguments": [{
                        "description": "The x position of the top-left point.",
                        "name": "topLeftX",
                        "type": "number"
                    }, {
                        "description": "The y position of the top-left point.",
                        "name": "topLeftY",
                        "type": "number"
                    }, {
                        "description": "The x position of the bottom-right point.",
                        "name": "bottomRightX",
                        "type": "number"
                    }, {
                        "description": "The y position of the bottom-right point.",
                        "name": "bottomRightY",
                        "type": "number"
                    }, {
                        "description": "This function gets passed one argument, the fixture, and should return a boolean. The search will continue if it is true or stop if it is false.",
                        "name": "callback",
                        "type": "function"
                    }]
                }]
            }, {
                "description": "Casts a ray and calls a function for each fixtures it intersects.",
                "name": "rayCast",
                "variants": [{
                    "arguments": [{
                        "description": "The x position of the starting point of the ray.",
                        "name": "x1",
                        "type": "number"
                    }, {
                        "description": "The y position of the starting point of the ray.",
                        "name": "y1",
                        "type": "number"
                    }, {
                        "description": "The x position of the end point of the ray.",
                        "name": "x2",
                        "type": "number"
                    }, {
                        "description": "The y position of the end point of the ray.",
                        "name": "y2",
                        "type": "number"
                    }, {
                        "description": "This function gets six arguments and should return a number.",
                        "name": "callback",
                        "type": "function"
                    }]
                }]
            }, {
                "description": "Sets functions for the collision callbacks during the world update.\n\nFour Lua functions can be given as arguments. The value nil removes a function.\n\nWhen called, each function will be passed three arguments. The first two arguments are the colliding fixtures and the third argument is the Contact between them. The PostSolve callback additionally gets the normal and tangent impulse for each contact point.",
                "name": "setCallbacks",
                "variants": [{
                    "arguments": [{
                        "description": "Gets called when two fixtures begin to overlap. ",
                        "name": "beginContact",
                        "type": "function"
                    }, {
                        "description": "Gets called when two fixtures cease to overlap.",
                        "name": "endContact",
                        "type": "function"
                    }, {
                        "description": "Gets called before a collision gets resolved.",
                        "name": "preSolve",
                        "type": "function"
                    }, {
                        "description": "Gets called after the collision has been resolved.",
                        "name": "postSolve",
                        "type": "function"
                    }]
                }]
            }, {
                "description": "Sets a function for collision filtering.\n\nIf the group and category filtering doesn't generate a collision decision, this function gets called with the two fixtures as arguments. The function should return a boolean value where true means the fixtures will collide and false means they will pass through each other.",
                "name": "setContactFilter",
                "variants": [{
                    "arguments": [{
                        "description": "The function handling the contact filtering.",
                        "name": "filter",
                        "type": "function"
                    }]
                }]
            }, {
                "description": "Set the gravity of the world.",
                "name": "setGravity",
                "variants": [{
                    "arguments": [{
                        "description": "The x component of gravity.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y component of gravity.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Set the sleep behaviour of the world.\n\nA sleeping body is much more efficient to simulate than when awake.\n\nIf sleeping is allowed, any body that has come to rest will sleep.",
                "name": "setSleepingAllowed",
                "variants": [{
                    "arguments": [{
                        "description": "True if the bodies are allowed to sleep or false if not.",
                        "name": "allowSleep",
                        "type": "boolean"
                    }]
                }]
            }, {
                "description": "Translates the World's origin. Useful in large worlds where floating point precision issues become noticeable at far distances from the origin.",
                "name": "translateOrigin",
                "variants": [{
                    "arguments": [{
                        "description": "The x component of the new origin with respect to the old origin.",
                        "name": "x",
                        "type": "number"
                    }, {
                        "description": "The y component of the new origin with respect to the old origin.",
                        "name": "y",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Update the state of the world.",
                "name": "update",
                "variants": [{
                    "arguments": [{
                        "description": "The time (in seconds) to advance the physics simulation.",
                        "name": "dt",
                        "type": "number"
                    }]
                }]
            }],
            "name": "World",
            "supertypes": ["Object"]
        }]
    }, {
        "description": "This module is responsible for decoding sound files. It can't play the sounds, see love.audio for that.",
        "functions": [{
            "description": "Attempts to find a decoder for the encoded sound data in the specified file.",
            "name": "newDecoder",
            "variants": [{
                "arguments": [{
                    "description": "The file with encoded sound data.",
                    "name": "file",
                    "type": "File"
                }, {
                    "default": "2048",
                    "description": "The size of each decoded chunk, in bytes.",
                    "name": "buffer",
                    "type": "number"
                }],
                "returns": [{
                    "description": "A new Decoder object.",
                    "name": "decoder",
                    "type": "Decoder"
                }]
            }, {
                "arguments": [{
                    "description": "The filename of the file with encoded sound data.",
                    "name": "filename",
                    "type": "string"
                }, {
                    "default": "2048",
                    "description": "The size of each decoded chunk, in bytes.",
                    "name": "buffer",
                    "type": "number"
                }],
                "returns": [{
                    "description": "A new Decoder object.",
                    "name": "decoder",
                    "type": "Decoder"
                }]
            }]
        }, {
            "description": "Creates new SoundData from a file. It's also possible to create SoundData with a custom sample rate, channel and bit depth.\n\nThe sound data will be decoded to the memory in a raw format. It is recommended to create only short sounds like effects, as a 3 minute song uses 30 MB of memory this way.",
            "name": "newSoundData",
            "variants": [{
                "arguments": [{
                    "description": "The filename of the file to load.",
                    "name": "filename",
                    "type": "string"
                }],
                "returns": [{
                    "description": "A new SoundData object.",
                    "name": "soundData",
                    "type": "SoundData"
                }]
            }, {
                "arguments": [{
                    "description": "A File pointing to an audio file.",
                    "name": "file",
                    "type": "File"
                }],
                "returns": [{
                    "description": "A new SoundData object.",
                    "name": "soundData",
                    "type": "SoundData"
                }]
            }, {
                "arguments": [{
                    "description": "The encoded data to decode into audio.",
                    "name": "data",
                    "type": "Data"
                }],
                "returns": [{
                    "description": "A new SoundData object.",
                    "name": "soundData",
                    "type": "SoundData"
                }]
            }, {
                "arguments": [{
                    "description": "Total number of samples.",
                    "name": "samples",
                    "type": "number"
                }, {
                    "default": "44100",
                    "description": "Number of samples per second",
                    "name": "rate",
                    "type": "number"
                }, {
                    "default": "16",
                    "description": "Bits per sample (8 or 16).",
                    "name": "bits",
                    "type": "number"
                }, {
                    "default": "2",
                    "description": "Either 1 for mono or 2 for stereo.",
                    "name": "channels",
                    "type": "number"
                }],
                "returns": [{
                    "description": "A new SoundData object.",
                    "name": "soundData",
                    "type": "SoundData"
                }]
            }]
        }],
        "name": "sound",
        "types": [{
            "constructors": ["newDecoder"],
            "description": "An object which can gradually decode a sound file.",
            "functions": [{
                "description": "Create new copy of existing Decoder. The new decoder will start decoding from the beginning of the audio stream.",
                "name": "clone",
                "variants": [{
                    "returns": [{
                        "description": "New copy of the decoder.",
                        "name": "decoder",
                        "type": "Decoder"
                    }]
                }]
            }, {
                "description": "Decodes a chunk of audio data to a SoundData.",
                "name": "decode",
                "variants": [{
                    "returns": [{
                        "description": "Decoded audio data.",
                        "name": "soundData",
                        "type": "SoundData"
                    }]
                }]
            }, {
                "description": "Returns the number of bits per sample.",
                "name": "getBitDepth",
                "variants": [{
                    "returns": [{
                        "description": "Either 8 or 16.",
                        "name": "bitDepth",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the number of channels in the stream.",
                "name": "getChannelCount",
                "variants": [{
                    "returns": [{
                        "description": "1 for mono, 2 for stereo.",
                        "name": "channels",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the duration of the sound file. It may not always be sample-accurate, and it may return -1 if the duration cannot be determined at all.",
                "name": "getDuration",
                "variants": [{
                    "returns": [{
                        "description": "The duration of the sound file in seconds, or -1 if it cannot be determined.",
                        "name": "duration",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the sample rate of the Decoder.",
                "name": "getSampleRate",
                "variants": [{
                    "returns": [{
                        "description": "Number of samples per second.",
                        "name": "rate",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the currently playing position of the Decoder.",
                "name": "seek",
                "variants": [{
                    "arguments": [{
                        "description": "The position to seek to, in seconds.",
                        "name": "offset",
                        "type": "number"
                    }]
                }]
            }],
            "name": "Decoder",
            "supertypes": ["Object"]
        }, {
            "constructors": ["newSoundData"],
            "description": "Contains raw audio samples. You can not play SoundData back directly. You must wrap a Source object around it.",
            "functions": [{
                "description": "Create new copy of existing SoundData.",
                "name": "clone",
                "variants": [{
                    "returns": [{
                        "description": "New copy of the sound data.",
                        "name": "soundData",
                        "type": "SoundData"
                    }]
                }]
            }, {
                "description": "Returns the number of bits per sample.",
                "name": "getBitDepth",
                "variants": [{
                    "returns": [{
                        "description": "Either 8 or 16.",
                        "name": "bits",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the number of channels in the stream.",
                "name": "getChannels",
                "variants": [{
                    "returns": [{
                        "description": "1 for mono, 2 for stereo.",
                        "name": "channels",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the number of channels in the stream.",
                "name": "getDuration",
                "variants": [{
                    "returns": [{
                        "description": "The duration of the sound data in seconds.",
                        "name": "duration",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Gets the sample at the specified position.",
                "name": "getSample",
                "variants": [{
                    "arguments": [{
                        "description": "The position of the sample (0 means first sample).",
                        "name": "i",
                        "type": "number"
                    }],
                    "returns": [{
                        "description": "The normalized sample (range -1.0 to 1.0).",
                        "name": "sample",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the number of samples per channel of the SoundData.",
                "name": "getSampleCount",
                "variants": [{
                    "returns": [{
                        "description": "Total number of samples.",
                        "name": "count",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Returns the sample rate of the SoundData.",
                "name": "getSampleRate",
                "variants": [{
                    "returns": [{
                        "description": "Number of samples per second.",
                        "name": "rate",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Sets the sample at the specified position.",
                "name": "setSample",
                "variants": [{
                    "arguments": [{
                        "description": "The position of the sample (0 means first sample).",
                        "name": "i",
                        "type": "number"
                    }, {
                        "description": "A normalized sample (range -1.0 to 1.0).",
                        "name": "sample",
                        "type": "number"
                    }]
                }]
            }],
            "name": "SoundData",
            "supertypes": ["Data", "Object"]
        }]
    }, {
        "description": "Provides access to information about the user's system.",
        "enums": [{
            "constants": [{
                "description": "Cannot determine power status.",
                "name": "unknown"
            }, {
                "description": "Not plugged in, running on a battery.",
                "name": "battery"
            }, {
                "description": "Plugged in, no battery available.",
                "name": "nobattery"
            }, {
                "description": "Plugged in, charging battery.",
                "name": "charging"
            }, {
                "description": "Plugged in, battery is fully charged.",
                "name": "charged"
            }],
            "description": "The basic state of the system's power supply.",
            "name": "PowerState"
        }, {
            "constants": [{
                "description": "Cannot determine network status.",
                "name": "unknown"
            }, {
                "description": "Connected to the internet.",
                "name": "connected"
            }, {
                "description": "No internet connection.",
                "name": "disconnected"
            }],
            "description": "The system's internet status.",
            "name": "NetworkState"
        }],
        "functions": [{
            "description": "Gets the current system firmware version.",
            "name": "getVersion",
            "variants": [{
                "returns": [{
                    "description": "The current system firmware version.",
                    "name": "version",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Gets the current console model.",
            "name": "getModel",
            "variants": [{
                "returns": [{
                    "description": "The current console model. \"N3DSXL\", \"3DS\", \"Mariko\", or \"Erista\".",
                    "name": "model",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Gets the current operating system.",
            "name": "getOS",
            "variants": [{
                "returns": [{
                    "description": "The current operating system. \"Horizon\" or \"Cafe\".",
                    "name": "osString",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Gets information about the system's internet status.",
            "name": "getNetworkInfo",
            "variants": [{
                "returns": [{
                    "description": "The system's internet status.",
                    "name": "state",
                    "type": "NetworkState"
                }, {
                    "description": "Strength of the Wifi.",
                    "name": "signal",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets information about the system's power supply.",
            "name": "getPowerInfo",
            "variants": [{
                "returns": [{
                    "description": "The basic state of the power supply.",
                    "name": "state",
                    "type": "PowerState"
                }, {
                    "description": "Percentage of battery life left, between 0 and 100. nil if the value can't be determined or there's no battery.",
                    "name": "percent",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets the amount of logical processors in the system.",
            "name": "getProcessorCount",
            "variants": [{
                "returns": [{
                    "description": "The amount of logical processors in the system.",
                    "name": "logicalProcessors",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets preferred locales in order of user's preference.",
            "name": "getPreferredLocales",
            "variants": [{
                "returns": [{
                    "description": "A sequence of strings in order of user's preference. Locales are in form xx_YY (or just xx when country is not available) where xx is an ISO-639 language specifier and YY is an ISO-3166 country code",
                    "name": "locales",
                    "type": "table"
                }]
            }]
        }, {
            "description": "Gets the current set region on the console",
            "name": "getRegion",
            "variants": [{
                "returns": [{
                    "description": "The current set region on the console",
                    "name": "region",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Gets the current username on the console (or app). On Switch, this is determined per-app due to the way games launch with multiple accounts.",
            "name": "getUsername",
            "variants": [{
                "returns": [{
                    "description": "The current username on the console (or app)",
                    "name": "username",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Gets the current system firmware version.",
            "name": "getVersion",
            "variants": [{
                "returns": [{
                    "description": "The current system firmware version.",
                    "name": "version",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Gets the current color theme on the system.",
            "name": "getColorTheme",
            "variants": [{
                "returns": [{
                    "description": "The current color theme on the system.",
                    "name": "colorTheme",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Gets the friend code of the current user.",
            "name": "getFriendCode",
            "variants": [{
                "returns": [{
                    "description": "The friend code of the current user.",
                    "name": "friendCode",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Gets the current amount of Play Coins on the system. Nintendo 3DS only.",
            "name": "getPlayCoins",
            "variants": [{
                "returns": [{
                    "description": "The current amount of Play Coins on the system.",
                    "name": "playCoins",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Sets the current amount of Play Coins on the system. Nintendo 3DS only. This function is absolute and not additive! Be aware!",
            "name": "setPlayCoins",
            "variants": [{
                "arguments": [{
                    "description": "What to set the amount of Play Coins to.",
                    "name": "playCoins",
                    "type": "number"
                }]
            }]
        }],
        "name": "system"
    }, {
        "description": "Allows you to work with threads.\n\nThreads are separate Lua environments, running in parallel to the main code. As their code runs separately, they can be used to compute complex operations without adversely affecting the frame rate of the main thread. However, as they are separate environments, they cannot access the variables and functions of the main thread, and communication between threads is limited.\n\nAll LOVE objects (userdata) are shared among threads so you'll only have to send their references across threads. You may run into concurrency issues if you manipulate an object on multiple threads at the same time.\n\nWhen a Thread is started, it only loads the love.thread module. Every other module has to be loaded with require.",
        "functions": [{
            "description": "Creates or retrieves a named thread channel.",
            "name": "getChannel",
            "variants": [{
                "arguments": [{
                    "description": "The name of the channel you want to create or retrieve.",
                    "name": "name",
                    "type": "string"
                }],
                "returns": [{
                    "description": "A named channel object which can be further manipulated.",
                    "name": "channel",
                    "type": "Channel"
                }]
            }]
        }, {
            "description": "Create a new unnamed thread channel.\n\nOne use for them is to pass new unnamed channels to other threads via Channel:push",
            "name": "newChannel",
            "variants": [{
                "returns": [{
                    "description": "A unnamed channel object which can be further manipulated.",
                    "name": "channel",
                    "type": "Channel"
                }]
            }]
        }, {
            "description": "Creates a new Thread from a File or Data object.",
            "name": "newThread",
            "variants": [{
                "arguments": [{
                    "description": "The name of the Lua File to use as source.",
                    "name": "filename",
                    "type": "string"
                }],
                "returns": [{
                    "description": "A new Thread that has yet to be started.",
                    "name": "thread",
                    "type": "Thread"
                }]
            }, {
                "arguments": [{
                    "description": "The FileData containing the Lua code to use as the source.",
                    "name": "fileData",
                    "type": "FileData"
                }],
                "returns": [{
                    "description": "A new Thread that has yet to be started.",
                    "name": "thread",
                    "type": "Thread"
                }]
            }, {
                "arguments": [{
                    "description": "A string containing the Lua code to use as the source. It needs to either be at least 1024 characters long, or contain at least one newline.",
                    "name": "codestring",
                    "type": "string"
                }],
                "returns": [{
                    "description": "A new Thread that has yet to be started.",
                    "name": "thread",
                    "type": "Thread"
                }]
            }]
        }],
        "name": "thread",
        "types": [{
            "constructors": ["newThread"],
            "description": "A Thread is a chunk of code that can run in parallel with other threads. Data can be sent between different threads with Channel objects.",
            "functions": [{
                "description": "Retrieves the error string from the thread if it produced an error.",
                "name": "getError",
                "variants": [{
                    "returns": [{
                        "description": "The error message.",
                        "name": "message",
                        "type": "string"
                    }]
                }]
            }, {
                "description": "Starts the thread.\n\nThreads can be restarted after they have completed their execution.",
                "name": "start",
                "variants": [[], {
                    "arguments": [{
                        "description": "A string, number, boolean, LÖVE object, or simple table.",
                        "name": "arg1",
                        "type": "value"
                    }, {
                        "description": "A string, number, boolean, LÖVE object, or simple table.",
                        "name": "arg2",
                        "type": "value"
                    }, {
                        "description": "You can continue passing values to the thread.",
                        "name": "...",
                        "type": "value"
                    }]
                }]
            }, {
                "description": "Wait for a thread to finish. This call will block until the thread finishes.",
                "name": "wait",
                "variants": [[]]
            }, {
                "description": "Returns whether the thread is currently running.\n\nThreads which are not running can be (re)started with Thread:start.",
                "name": "isRunning",
                "variants": [{
                    "returns": [{
                        "description": "True if the thread is running, false otherwise.",
                        "name": "running",
                        "type": "boolean"
                    }]
                }]
            }],
            "name": "Thread",
            "supertypes": ["Object"]
        }, {
            "constructors": ["getChannel", "newChannel"],
            "description": "A channel is a way to send and receive data to and from different threads.",
            "functions": [{
                "description": "Clears all the messages in the Channel queue.",
                "name": "clear",
                "variants": [[]]
            }, {
                "description": "Retrieves the value of a Channel message and removes it from the message queue.\n\nThe value of the message can be a boolean, string, number, LÖVE userdata, or a simple flat table. It waits until a message is in the queue then returns the message value.",
                "name": "demand",
                "variants": [{
                    "returns": [{
                        "description": "The contents of the message.",
                        "name": "value",
                        "type": "value"
                    }]
                }]
            }, {
                "description": "Retrieves the number of messages in the thread Channel queue.",
                "name": "getCount",
                "variants": [{
                    "returns": [{
                        "description": "The number of messages in the queue.",
                        "name": "count",
                        "type": "number"
                    }]
                }]
            }, {
                "description": "Retrieves the value of a Channel message, but leaves it in the queue.\n\nThe value of the message can be a boolean, string, number or a LÖVE userdata. It returns nil if there's no message in the queue.",
                "name": "peek",
                "variants": [{
                    "returns": [{
                        "description": "The contents of the message.",
                        "name": "value",
                        "type": "value"
                    }]
                }]
            }, {
                "description": "Executes the specified function atomically with respect to this Channel.\n\nCalling multiple methods in a row on the same Channel is often useful. However if multiple Threads are calling this Channel's methods at the same time, the different calls on each Thread might end up interleaved (e.g. one or more of the second thread's calls may happen in between the first thread's calls.)\n\nThis method avoids that issue by making sure the Thread calling the method has exclusive access to the Channel until the specified function has returned.",
                "name": "performAtomic",
                "variants": [{
                    "arguments": [{
                        "description": "The function to call, the form of function(channel, arg1, arg2, ...) end. The Channel is passed as the first argument to the function when it is called.",
                        "name": "func",
                        "type": "function"
                    }, {
                        "description": "Additional arguments that the given function will receive when it is called.",
                        "name": "arg1",
                        "type": "any"
                    }, {
                        "description": "Additional arguments that the given function will receive when it is called.",
                        "name": "...",
                        "type": "any"
                    }],
                    "returns": [{
                        "description": "The first return value of the given function (if any.)",
                        "name": "ret1",
                        "type": "any"
                    }, {
                        "description": "Any other return values.",
                        "name": "...",
                        "type": "any"
                    }]
                }]
            }, {
                "description": "Retrieves the value of a Channel message and removes it from the message queue.\n\nThe value of the message can be a boolean, string, number, LÖVE userdata, or a simple flat table. It returns nil if there are no messages in the queue.",
                "name": "pop",
                "variants": [{
                    "returns": [{
                        "description": "The contents of the message.",
                        "name": "value",
                        "type": "value"
                    }]
                }]
            }, {
                "description": "Send a message to the thread Channel.\n\nThe value of the message can be a boolean, string, number, LÖVE userdata, or a simple flat table. Foreign userdata (Lua's files, LuaSocket, ENet, ...), functions, and tables inside tables are not supported.",
                "name": "push",
                "variants": [{
                    "arguments": [{
                        "description": "The contents of the message.",
                        "name": "value",
                        "type": "value"
                    }]
                }]
            }, {
                "description": "Send a message to the thread Channel and wait for a thread to accept it.\n\nThe value of the message can be a boolean, string, number, LÖVE userdata, or a simple flat table. Foreign userdata (Lua's files, LuaSocket, ENet, ...), functions, and tables inside tables are not supported.",
                "name": "supply",
                "variants": [{
                    "arguments": [{
                        "description": "The contents of the message.",
                        "name": "value",
                        "type": "value"
                    }]
                }]
            }],
            "name": "Channel",
            "supertypes": ["Object"]
        }]
    }, {
        "description": "Provides an interface to the user's clock.",
        "functions": [{
            "description": "Returns the average delta time (seconds per frame) over the last second.",
            "name": "getAverageDelta",
            "variants": [{
                "returns": [{
                    "description": "The average delta time over the last second.",
                    "name": "delta",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Returns the time between the last two frames.",
            "name": "getDelta",
            "variants": [{
                "returns": [{
                    "description": "The time passed (in seconds).",
                    "name": "dt",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Returns the current frames per second.",
            "name": "getFPS",
            "variants": [{
                "returns": [{
                    "description": "The current FPS.",
                    "name": "fps",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Returns the value of a timer with an unspecified starting time. This function should only be used to calculate differences between points in time, as the starting time of the timer is unknown.",
            "name": "getTime",
            "variants": [{
                "returns": [{
                    "description": "The time in seconds.",
                    "name": "time",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Sleeps the program for the specified amount of time.",
            "name": "sleep",
            "variants": [{
                "arguments": [{
                    "description": "Seconds to sleep for.",
                    "name": "s",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Measures the time between two frames. Calling this changes the return value of love.timer.getDelta.",
            "name": "step",
            "variants": [[]]
        }],
        "name": "timer"
    }, {
        "description": "Provides an interface to touch-screen presses.",
        "functions": [{
            "description": "Gets the current position of the specified touch-press, in pixels.",
            "name": "getPosition",
            "variants": [{
                "arguments": [{
                    "description": "The identifier of the touch-press. Use love.touch.getTouches, love.touchpressed, or love.touchmoved to obtain touch id values.",
                    "name": "id",
                    "type": "light userdata"
                }],
                "returns": [{
                    "description": "The position along the x-axis of the touch-press inside the window, in pixels.",
                    "name": "x",
                    "type": "number"
                }, {
                    "description": "The position along the y-axis of the touch-press inside the window, in pixels.",
                    "name": "y",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets the current pressure of the specified touch-press.",
            "name": "getPressure",
            "variants": [{
                "arguments": [{
                    "description": "The identifier of the touch-press. Use love.touch.getTouches, love.touchpressed, or love.touchmoved to obtain touch id values.",
                    "name": "id",
                    "type": "light userdata"
                }],
                "returns": [{
                    "description": "The pressure of the touch-press. Most touch screens aren't pressure sensitive, in which case the pressure will be 1.",
                    "name": "pressure",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets a list of all active touch-presses.",
            "name": "getTouches",
            "variants": [{
                "returns": [{
                    "description": "A list of active touch-press id values, which can be used with love.touch.getPosition.",
                    "name": "touches",
                    "type": "table"
                }]
            }]
        }],
        "name": "touch"
    }, {
        "description": "This module is responsible for decoding, controlling, and streaming video files.\n\nIt can't draw the videos, see love.graphics.newVideo and Video objects for that.",
        "functions": [{
            "description": "Creates a new VideoStream. Currently only Ogg Theora video files are supported. VideoStreams can't draw videos, see love.graphics.newVideo for that.",
            "name": "newVideoStream",
            "variants": [{
                "arguments": [{
                    "description": "The file path to the Ogg Theora video file.",
                    "name": "filename",
                    "type": "string"
                }],
                "returns": [{
                    "description": "A new VideoStream.",
                    "name": "videostream",
                    "type": "VideoStream"
                }]
            }, {
                "arguments": [{
                    "description": "The File object containing the Ogg Theora video.",
                    "name": "file",
                    "type": "File"
                }],
                "returns": [{
                    "description": "A new VideoStream.",
                    "name": "videostream",
                    "type": "VideoStream"
                }]
            }]
        }],
        "name": "video",
        "types": [{
            "constructors": ["newVideoStream"],
            "description": "An object which decodes, streams, and controls Videos.",
            "functions": [],
            "name": "VideoStream",
            "supertypes": ["Object"]
        }]
    }, {
        "description": "Provides an interface for modifying and retrieving information about the program's window.",
        "functions": [{
            "description": "Gets the number of screens.",
            "name": "getDisplayCount",
            "variants": [{
                "returns": [{
                    "description": "The number of screens.",
                    "name": "count",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets a list of supported fullscreen modes.",
            "name": "getFullscreenModes",
            "variants": [{
                "arguments": [{
                    "default": "1",
                    "description": "The index of the display, if multiple monitors are available.",
                    "name": "display",
                    "type": "number"
                }],
                "returns": [{
                    "description": "A table of width/height pairs. (Note that this may not be in order.)",
                    "name": "modes",
                    "type": "table"
                }]
            }]
        }, {
            "description": "Checks if the window is open.",
            "name": "isOpen",
            "variants": [{
                "returns": [{
                    "description": "True if the window is open, false otherwise.",
                    "name": "open",
                    "type": "boolean"
                }]
            }]
        }, {
            "description": "Sets the display mode and properties of the window.\n\nStubbed function, always successful",
            "name": "setMode",
            "variants": [{
                "returns": [{
                    "description": "Always true.",
                    "name": "success",
                    "type": "boolean"
                }]
            }]
        }],
        "name": "window"
    }],
    "types": [{
        "description": "The superclass of all data.",
        "functions": [{
            "description": "Gets a pointer to the Data.",
            "name": "getPointer",
            "variants": [{
                "returns": [{
                    "description": "A raw pointer to the Data.",
                    "name": "pointer",
                    "type": "light userdata"
                }]
            }]
        }, {
            "description": "Gets the size of the Data.",
            "name": "getSize",
            "variants": [{
                "returns": [{
                    "description": "The size of the Data in bytes.",
                    "name": "size",
                    "type": "number"
                }]
            }]
        }, {
            "description": "Gets the full Data as a string.",
            "name": "getString",
            "variants": [{
                "returns": [{
                    "description": "The raw data.",
                    "name": "data",
                    "type": "string"
                }]
            }]
        }],
        "name": "Data",
        "subtypes": ["CompressedData", "CompressedImageData", "FileData", "FontData", "GlyphData", "ImageData", "SoundData"],
        "supertypes": ["Object"]
    }, {
        "description": "Superclass for all things that can be drawn on screen. This is an abstract type that can't be created directly.",
        "name": "Drawable",
        "subtypes": ["Canvas", "Framebuffer", "Image", "Mesh", "ParticleSystem", "SpriteBatch", "Text", "Texture", "Video"],
        "supertypes": ["Object"]
    }, {
        "description": "The superclass of all LÖVE types.",
        "functions": [{
            "description": "Gets the type of the object as a string.",
            "name": "type",
            "variants": [{
                "returns": [{
                    "description": "The type as a string.",
                    "name": "type",
                    "type": "string"
                }]
            }]
        }, {
            "description": "Checks whether an object is of a certain type. If the object has the type with the specified name in its hierarchy, this function will return true.",
            "name": "typeOf",
            "variants": [{
                "arguments": [{
                    "description": "The name of the type to check for.",
                    "name": "name",
                    "type": "string"
                }],
                "returns": [{
                    "description": "True if the object is of the specified type, false otherwise.",
                    "name": "b",
                    "type": "boolean"
                }]
            }]
        }],
        "name": "Object",
        "subtypes": ["BezierCurve", "Body", "Canvas", "ChainShape", "Channel", "CircleShape", "CompressedData", "CompressedImageData", "Contact", "Cursor", "Data", "Decoder", "DistanceJoint", "Drawable", "EdgeShape", "File", "FileData", "Fixture", "Font", "FontData", "Framebuffer", "FrictionJoint", "GearJoint", "GlyphData", "Image", "ImageData", "Joint", "Joystick", "Mesh", "MotorJoint", "MouseJoint", "ParticleSystem", "PixelEffect", "PolygonShape", "PrismaticJoint", "PulleyJoint", "Quad", "Quad", "RandomGenerator", "Rasterizer", "RevoluteJoint", "RopeJoint", "Shader", "Shape", "SoundData", "Source", "SpriteBatch", "Text", "Texture", "Thread", "Video", "VideoStream", "WeldJoint", "WheelJoint", "World"]
    }],
    "constants" : [{
        "description": "Returns the OS this is running, \"Horizon\".",
        "name": "_os",
        "type": "string"
    }, {
        "description": "Returns the version of LÖVE the app is compatible against",
        "name": "_version",
        "type": "string"
    }, {
        "description": "Returns the version of LÖVE Potion",
        "name": "_potion_version",
        "type": "string"
    }, {
        "description": "Returns the console the app is running on, \"3DS\" or \"Switch\"",
        "name": "_console_name",
        "type": "string"
    }, {
        "description": "Returns the major version of LÖVE the app is compatible against",
        "name": "_version_major",
        "type": "string"
    }, {
        "description": "Returns the minor version of LÖVE the app is compatible against",
        "name": "_version_minor",
        "type": "string"
    }, {
        "description": "Returns the revision version of LÖVE the app is compatible against",
        "name": "_version_revision",
        "type": "string"
    }, {
        "description": "Returns the codename of LÖVE the app is compatible against",
        "name": "_version_codename",
        "type": "string"
    }],
    "version": "11.4"
}