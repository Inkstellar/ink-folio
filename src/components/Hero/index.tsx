import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import { FaBehance, FaLinkedin } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.dark};
  position: relative;
  overflow: hidden;
`;

const ParticleContainer = styled.div`
  // position: absolute;
  // width: 100%;
  // height: 100%;
  // z-index: 1;
`;

const HeroContent = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  transition: letter-spacing 0.3s ease;
  color: grey;
  &:hover {
    letter-spacing: 0.2rem;
    color:  white;
    filter: drop-shadow(0 0 10px #fff);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.light};
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.light};
  font-size: 1.8rem;
  opacity: 0.7;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: translateY(-3px);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadFull(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);


  return (
    <HeroSection id="home">
      <ParticleContainer>
        {init && <Particles
          id="tsparticles"
          options={{
            "autoPlay": true,
            "background": {
              "color": {
                "value": "#000000"
              },
              "image": "",
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover",
              "opacity": 1
            },
            "backgroundMask": {
              "composite": "destination-out",
              "cover": {
                "opacity": 1,
                "color": {
                  "value": ""
                }
              },
              "enable": false
            },
            "clear": true,
            "defaultThemes": {},
            "delay": 0,
            "fullScreen": {
              "enable": true,
              "zIndex": 0
            },
            "detectRetina": true,
            "duration": 0,
            "fpsLimit": 120,
            "interactivity": {
              "detectsOn": "window",
              "events": {
                "onClick": {
                  "enable": false,
                  "mode": "push"
                },
                // "onDiv": {
                //   "selectors": {},
                //   "enable": false,
                //   "mode": {},
                //   "type": "circle"
                // },
                "onHover": {
                  "enable": true,
                  "mode": "bubble",
                  "parallax": {
                    "enable": false,
                    "force": 2,
                    "smooth": 10
                  }
                },
                "resize": {
                  "delay": 0.5,
                  "enable": true
                }
              },
              "modes": {
                "trail": {
                  "delay": 1,
                  "pauseOnStop": false,
                  "quantity": 1
                },
                "attract": {
                  "distance": 200,
                  "duration": 0.4,
                  "easing": "ease-out-quad",
                  "factor": 1,
                  "maxSpeed": 50,
                  "speed": 1
                },
                "bounce": {
                  "distance": 200
                },
                "bubble": {
                  "distance": 40,
                  "duration": 2,
                  "mix": false,
                  "opacity": 8,
                  "size": 6,
                  "divs": {
                    "distance": 200,
                    "duration": 0.4,
                    "mix": false,
                    "selectors": {}
                  }
                },
                "connect": {
                  "distance": 80,
                  "links": {
                    "opacity": 0.5
                  },
                  "radius": 60
                },
                "grab": {
                  "distance": 400,
                  "links": {
                    "blink": false,
                    "consent": false,
                    "opacity": 1
                  }
                },
                "push": {
                  "default": true,
                  "groups": [],
                  "quantity": 4
                },
                "remove": {
                  "quantity": 2
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4,
                  "factor": 100,
                  "speed": 1,
                  "maxSpeed": 50,
                  "easing": "ease-out-quad",
                  "divs": {
                    "distance": 200,
                    "duration": 0.4,
                    "factor": 100,
                    "speed": 1,
                    "maxSpeed": 50,
                    "easing": "ease-out-quad",
                    "selectors": {}
                  }
                },
                "slow": {
                  "factor": 1,
                  "radius": 0
                },
                "particle": {
                  "replaceCursor": false,
                  "pauseOnStop": false,
                  "stopDelay": 0
                },
                "light": {
                  "area": {
                    "gradient": {
                      "start": {
                        "value": "#ffffff"
                      },
                      "stop": {
                        "value": "#000000"
                      }
                    },
                    "radius": 1000
                  },
                  "shadow": {
                    "color": {
                      "value": "#000000"
                    },
                    "length": 2000
                  }
                }
              }
            },
            "manualParticles": [],
            "particles": {
              "bounce": {
                "horizontal": {
                  "value": 1
                },
                "vertical": {
                  "value": 1
                }
              },
              "collisions": {
                "absorb": {
                  "speed": 2
                },
                "bounce": {
                  "horizontal": {
                    "value": 1
                  },
                  "vertical": {
                    "value": 1
                  }
                },
                "enable": false,
                "maxSpeed": 50,
                "mode": "bounce",
                "overlap": {
                  "enable": true,
                  "retries": 0
                }
              },
              "color": {
                "value": "#ffffff",
                "animation": {
                  "h": {
                    "count": 0,
                    "enable": false,
                    "speed": 1,
                    "decay": 0,
                    "delay": 0,
                    "sync": true,
                    "offset": 0
                  },
                  "s": {
                    "count": 0,
                    "enable": false,
                    "speed": 1,
                    "decay": 0,
                    "delay": 0,
                    "sync": true,
                    "offset": 0
                  },
                  "l": {
                    "count": 0,
                    "enable": false,
                    "speed": 1,
                    "decay": 0,
                    "delay": 0,
                    "sync": true,
                    "offset": 0
                  }
                }
              },
              "effect": {
                "close": true,
                "fill": true,
                "options": {},
                // "type": {}
              },
              // "groups": [],
              "move": {
                "angle": {
                  "offset": 0,
                  "value": 90
                },
                "attract": {
                  "distance": 200,
                  "enable": false,
                  "rotate": {
                    "x": 3000,
                    "y": 3000
                  }
                },
                "center": {
                  "x": 50,
                  "y": 50,
                  "mode": "percent",
                  "radius": 0
                },
                "decay": 0,
                "distance": {},
                "direction": "none",
                "drift": 0,
                "enable": true,
                "gravity": {
                  "acceleration": 9.81,
                  "enable": false,
                  "inverse": false,
                  "maxSpeed": 50
                },
                "path": {
                  "clamp": true,
                  "delay": {
                    "value": 0
                  },
                  "enable": false,
                  "options": {}
                },
                "outModes": {
                  "default": "bounce",
                  "bottom": "bounce",
                  "left": "bounce",
                  "right": "bounce",
                  "top": "bounce"
                },
                "random": false,
                "size": false,
                "speed": 1,
                "spin": {
                  "acceleration": 0,
                  "enable": false
                },
                "straight": false,
                "trail": {
                  "enable": false,
                  "length": 10,
                  "fill": {}
                },
                "vibrate": false,
                "warp": false
              },
              "number": {
                "density": {
                  "enable": false,
                  "width": 1920,
                  "height": 1080
                },
                "limit": {
                  "mode": "delete",
                  "value": 0
                },
                "value": 200
              },
              "opacity": {
                "value": {
                  "min": 0.05,
                  "max": 0.4
                },
                "animation": {
                  "count": 0,
                  "enable": true,
                  "speed": 2,
                  "decay": 0,
                  "delay": 0,
                  "sync": false,
                  "mode": "auto",
                  "startValue": "random",
                  "destroy": "none"
                }
              },
              "reduceDuplicates": false,
              "shadow": {
                "blur": 0,
                "color": {
                  "value": "#000"
                },
                "enable": false,
                "offset": {
                  "x": 0,
                  "y": 0
                }
              },
              "shape": {
                "close": true,
                "fill": true,
                "options": {},
                "type": "circle"
              },
              "size": {
                "value": 1,
                "animation": {
                  "count": 0,
                  "enable": false,
                  "speed": 5,
                  "decay": 0,
                  "delay": 0,
                  "sync": false,
                  "mode": "auto",
                  "startValue": "random",
                  "destroy": "none"
                }
              },
              "stroke": {
                "width": 0
              },
              "zIndex": {
                "value": 0,
                "opacityRate": 1,
                "sizeRate": 1,
                "velocityRate": 1
              },
              "destroy": {
                "bounds": {},
                "mode": "none",
                "split": {
                  "count": 1,
                  "factor": {
                    "value": 3
                  },
                  "rate": {
                    "value": {
                      "min": 4,
                      "max": 9
                    }
                  },
                  "sizeOffset": true,
                  "particles": {}
                }
              },
              "roll": {
                "darken": {
                  "enable": false,
                  "value": 0
                },
                "enable": false,
                "enlighten": {
                  "enable": false,
                  "value": 0
                },
                "mode": "vertical",
                "speed": 25
              },
              "tilt": {
                "value": 0,
                "animation": {
                  "enable": false,
                  "speed": 0,
                  "decay": 0,
                  "sync": false
                },
                "direction": "clockwise",
                "enable": false
              },
              "twinkle": {
                "lines": {
                  "enable": false,
                  "frequency": 0.05,
                  "opacity": 1
                },
                "particles": {
                  "enable": false,
                  "frequency": 0.05,
                  "opacity": 1
                }
              },
              "wobble": {
                "distance": 5,
                "enable": false,
                "speed": {
                  "angle": 50,
                  "move": 10
                }
              },
              "life": {
                "count": 0,
                "delay": {
                  "value": 0,
                  "sync": false
                },
                "duration": {
                  "value": 0,
                  "sync": false
                }
              },
              "rotate": {
                "value": 0,
                "animation": {
                  "enable": false,
                  "speed": 0,
                  "decay": 0,
                  "sync": false
                },
                "direction": "clockwise",
                "path": false
              },
              "orbit": {
                "animation": {
                  "count": 0,
                  "enable": false,
                  "speed": 1,
                  "decay": 0,
                  "delay": 0,
                  "sync": false
                },
                "enable": false,
                "opacity": 1,
                "rotation": {
                  "value": 45
                },
                "width": 1
              },
              "links": {
                "blink": false,
                "color": {
                  "value": "#ffffff"
                },
                "consent": false,
                "distance": 30,
                "enable": true,
                "frequency": 1,
                "opacity": 0.4,
                "shadow": {
                  "blur": 5,
                  "color": {
                    "value": "#000"
                  },
                  "enable": false
                },
                "triangles": {
                  "enable": false,
                  "frequency": 1
                },
                "width": 1,
                "warp": false
              },
              "repulse": {
                "value": 0,
                "enabled": false,
                "distance": 1,
                "duration": 1,
                "factor": 1,
                "speed": 1
              }
            },
            "pauseOnBlur": true,
            "pauseOnOutsideViewport": true,
            "responsive": [],
            "smooth": false,
            "style": {},
            "themes": [],
            "zLayers": 100,
            "key": "polygonMask",
            "name": "Polygon Mask",
            "motion": {
              "disable": false,
              "reduce": {
                "factor": 4,
                "value": true
              }
            },
            "polygon": {
              "draw": {
                "enable": true,
                "stroke": {
                  "color": {
                    "value": "#fff"
                  },
                  "width": 1,
                  "opacity": 0.2
                }
              },
              "enable": true,
              "inline": {
                "arrangement": "equidistant"
              },
              "move": {
                "radius": 10,
                "type": "path"
              },
              "scale": 0.5,
              "type": "inline",
              "url": "https://mir-s3-cdn-cf.behance.net/user/230/5004b318593537.5e9b2db9d5840.gif",
              "position": {
                "x": 50,
                "y": 50
              }
            }
          }}
        />
        }
      </ParticleContainer>
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Kousi,  </Title>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >   I Craft Digital Experiences  </Title>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >    That People Love
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          UI/UX Designer & Front-end Developer
        </Subtitle>
        <SocialLinks
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SocialLink href="https://www.behance.net/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaBehance />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
        </SocialLinks>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;